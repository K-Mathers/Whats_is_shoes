import Clip from "@/assets/AIAssets/Clip";
import "./AIInput.css";
import Send from "@/assets/AIAssets/Send";
import { useState } from "react";
import { messageToAi, newChatSession } from "@/api/ai";
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
  const navigate = useNavigate();

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const currentMessages = userMessage;
    setUserMessage("");
    setMessages((prev) => [...prev, { role: "USER", text: currentMessages }]);
    try {
      setIsTyping(true);
      let currentSessionId = sessionIdNow;

      if (!sessionIdNow) {
        const data = await newChatSession({ mode: selectedMode });
        currentSessionId = data.sessionId;
        navigate(`/ai/${currentSessionId}`, { replace: true });
      }

      const messageResponse = await messageToAi({
        sessionId: currentSessionId as string,
        userText: currentMessages,
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="input-block">
      <button className="clip-button">
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
  );
};

export default AIInput;
