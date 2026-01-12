import Clip from "@/assets/AIAssets/Clip";
import "./AIInput.css";
import Send from "@/assets/AIAssets/Send";
import { useState } from "react";
import type { IMessageData } from "@/api/ai/types";
import { messageToAi, newChatSession } from "@/api/ai";

interface IAIInput {
  answers: string[];
  selectedMode: string;
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
}

const AIInput = ({
  selectedMode,
  answers,
  setSelectedMode,
  setAnswers,
}: IAIInput) => {
  const [userMessage, setUserMessage] = useState("");
  const sendMessage = async () => {
    try {
      let uuId = "";
      const updateSession = async () => {
        try {
          const data = await newChatSession({ mode: selectedMode });
          return data.sessionId;
        } catch (error) {
          console.error(error);
          return "";
        }
      };
      uuId = await updateSession();
      const formatedData: IMessageData = {
        sessionId: uuId,
        userText: userMessage,
      };
      const messageResponse = await messageToAi(formatedData);
      setAnswers((prev) => [...prev, messageResponse.answer]);
      setUserMessage("");
      console.log("Ответ от ИИ получен:", messageResponse);
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  return (
    <div className="input-block">
      <button className="clip-button">
        <Clip />
      </button>
      <input
        onChange={(e) => setUserMessage(e.target.value)}
        className="ai-input"
        placeholder="Send a message"
        type="text"
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
