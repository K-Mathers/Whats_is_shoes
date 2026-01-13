import AIInput from "./ui/AIInput/AIInput";
import ChatBotPrewiew from "./ui/ChatBotPrewie/ChatBotPreview";
import "./RightSide.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
interface IRightSide {
  sessionId: string | undefined;
  selectedMode: string;
  messages: IChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>;
}

export interface IChatMessage {
  role: "USER" | "ASSISTANT";
  text: string;
}

const RightSide = ({
  sessionId,
  messages,
  selectedMode,
  setMessages,
}: IRightSide) => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="right-side-block">
      {messages.length === 0 ? (
        <ChatBotPrewiew />
      ) : (
        <div className="chat-messages-container">
          {messages.map((el, index) => (
            <div
              key={index}
              className={`message-bubble ${
                el.role === "USER" ? "user-msg" : "ai-msg"
              }`}
            >
              {el.role === "ASSISTANT" ? (
                <ReactMarkdown>{el.text}</ReactMarkdown>
              ) : (
                el.text
              )}
            </div>
          ))}

          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      )}
      <AIInput
        sessionIdNow={sessionId}
        selectedMode={selectedMode}
        setIsTyping={setIsTyping}
        setMessages={setMessages}
      />
    </div>
  );
};

export default RightSide;
