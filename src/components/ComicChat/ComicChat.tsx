import React, { useState } from "react";
import "./ComicChat.css";

const ComicChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hey there! How can I help you, hero?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    { text: "BOOM! I'll get back to you soon!", sender: "bot" },
                ]);
            }, 1000);
        }
    };

    return (
        <div className={`comic-chat-container ${isOpen ? "open" : ""}`}>
            {isOpen && (
                <div className="comic-chat-window">
                    <div className="header-container">
                        <div className="comic-chat-header">
                            <span className="comic-chat-title">SUPPORT HERO!</span>
                        </div>
                        <button className="comic-chat-close" onClick={() => setIsOpen(false)}>
                            X
                        </button>
                    </div>
                    <div className="comic-chat-messages">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`comic-message-bubble ${msg.sender === "bot" ? "bot" : "user"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
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
