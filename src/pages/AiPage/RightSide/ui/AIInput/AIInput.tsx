import Clip from "@/assets/AIAssets/Clip";
import "./AIInput.css";
import Send from "@/assets/AIAssets/Send";
import { useRef, useState } from "react";
import { messageToAi, newChatSession, uploadImage } from "@/api/ai";
import type { IChatMessage } from "../../RightSide";
import { useNavigate } from "react-router-dom";

interface IAIInput {
  sessionIdNow: string | undefined;
  selectedMode: string;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  setMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

const AIInput = ({
  sessionIdNow,
  selectedMode,
  setIsTyping,
  setMessages,
}: IAIInput) => {
  const [userMessage, setUserMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const currentMessages = userMessage;
    // const fileToUpload = selectedImage;

    handleRemoveImage();
    setUserMessage("");

    setMessages((prev) => [...prev, { role: "USER", text: currentMessages }]);

    try {
      setIsTyping(true);
      let currentSessionId = sessionIdNow;
      // let serverImageUrl = undefined;

      // if (fileToUpload) {
      //   try {
      //     const uploadRes = await uploadImage(fileToUpload);
      //     serverImageUrl = uploadRes.data.imageUrl;
      //     console.log("Image uploaded:", serverImageUrl);
      //   } catch (error) {
      //     console.error(error);
      //   }
      // }

      if (!sessionIdNow) {
        const data = await newChatSession({ mode: selectedMode });
        currentSessionId = data.sessionId;
        navigate(`/ai/${currentSessionId}`, { replace: true });
      }

      const messageResponse = await messageToAi({
        sessionId: currentSessionId as string,
        userText: currentMessages,
        // imageUrl: currentImage,
      });

      if (messageResponse?.answer) {
        setMessages((prev) => [
          ...prev,
          { role: "ASSISTANT", text: messageResponse.answer },
        ]);
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
