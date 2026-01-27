import React, { useEffect, useRef, useState } from "react";
import "./ComicChat.css";
import type { IMessages } from "@/pages/AdminPage/ui/Messages/types/chatTypes";
import { io, Socket } from "socket.io-client";

const ComicChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [input, setInput] = useState("");
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim() && socketRef.current) {
      const messagePayload = {
        content: input,
        chatId: activeChatId,
      };
      socketRef.current.emit("send_message", messagePayload);
      setInput("");
    }
  };

  useEffect(() => {
    if (isOpen) {
      const socket = io("http://localhost:3000/support", {
        withCredentials: true,
        transports: ["polling", "websocket"],
      });

      socketRef.current = socket;

      socket.on("connect", () => {
        socket.emit("join_chat");
      });

      socket.on("message_history", (history: IMessages[]) => {
        setMessages(history);
        if (history.length > 0) {
          setActiveChatId(history[0].chatId);
        }
      });

      socket.on("new_message", (msg: IMessages) => {
        setMessages((prev) => [...prev, msg]);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [isOpen]);

  return (
    <div className={`comic-chat-container ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <div className="comic-chat-window">
          <div className="header-container">
            <div className="comic-chat-header">
              <span className="comic-chat-title">SUPPORT HERO!</span>
            </div>
            <button
              className="comic-chat-close"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
          <div className="comic-chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`comic-message-bubble ${msg.senderRole === "ADMIN" ? "admin" : "user"}`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="comic-chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="comic-chat-input"
            />
            <button className="comic-chat-send" onClick={handleSend}>
              SEND!
            </button>
          </div>
        </div>
      )}
      <button className="comic-chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "?" : "HELP!"}
      </button>
    </div>
  );
};

export default ComicChat;
