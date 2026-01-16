import Clip from "@/assets/AIAssets/Clip";
import "./AIInput.css";
import Send from "@/assets/AIAssets/Send";
import { useRef, useState } from "react";
import { newChatSession, uploadImage } from "@/api/ai";
import type { IChatMessage } from "../../RightSide";
import { useNavigate } from "react-router-dom";
import { aiPath } from "@/api/ai/aiPath";

interface IAIInput {
  sessionIdNow: string | undefined;
  selectedMode: string;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
  messages: IChatMessage[];
}

const AIInput = ({
  sessionIdNow,
  selectedMode,
  setIsTyping,
  setMessages,
  messages,
}: IAIInput) => {
  const [userMessage, setUserMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const currentMessages = userMessage;

    handleRemoveImage();
    setUserMessage("");

    const currentMsgs: IChatMessage[] = [
      ...messages,
      { role: "USER", text: currentMessages },
      { role: "ASSISTANT", text: "" },
    ];

    setMessages(currentMsgs);

    try {
      setIsTyping(true);
      let currentSessionId = sessionIdNow;

      if (!sessionIdNow) {
        const data = await newChatSession({ mode: selectedMode });
        currentSessionId = data.sessionId;
        navigate(`/ai/${currentSessionId}`, {
          replace: true,
          state: { preserveMessages: currentMsgs },
        });
      }

      const serverImage = await uploadImage(selectedImage);
      const messageResponse = await fetch(aiPath.FETCHMESSAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: currentSessionId,
          userText: currentMessages,
          imageUrl: serverImage.imageUrl,
          stream: true,
        }),
        credentials: "include",
      });

      if (!messageResponse.ok) throw new Error("Ошибка сервера");
      if (!messageResponse.body) return;

      const reader = messageResponse.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || !trimmedLine.startsWith("data:")) continue;

          try {
            const jsonString = trimmedLine.replace("data:", "").trim();
            const parsed = JSON.parse(jsonString);
            const content = parsed.content || "";
            accumulatedText += content;

            setMessages((prev) => {
              const lastMessage = prev[prev.length - 1];

              if (lastMessage && lastMessage.role === "ASSISTANT") {
                return [
                  ...prev.slice(0, -1),
                  { ...lastMessage, text: accumulatedText },
                ];
              }

              return [...prev, { role: "ASSISTANT", text: accumulatedText }];
            });
          } catch (e) {
            console.error("Ошибка парсинга чанка:", e);
          }
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClipClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="ai-input-container">
      {previewUrl && (
        <div className="preview-block">
          <img className="preview-image" src={previewUrl} />
          <button onClick={() => handleRemoveImage()} className="remove-image">
            x
          </button>
        </div>
      )}
      <div className="input-block">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept="image/*"
        />
        <button onClick={handleClipClick} className="clip-button">
          <Clip />
        </button>
        <input
          onKeyDown={handleKeyDown}
          onChange={(e) => setUserMessage(e.target.value)}
          className="ai-input"
          placeholder="Send a message"
          type="text"
          value={userMessage}
        />
        <div className="right-buttons-wrapper">
          <button onClick={sendMessage} className="send-button">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInput;
