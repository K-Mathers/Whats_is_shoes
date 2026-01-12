import AIInput from "./ui/AIInput/AIInput";
import ChatBotPrewiew from "./ui/ChatBotPrewie/ChatBotPreview";
import "./RightSide.css";
import { useState } from "react";
interface IRightSide {
  selectedMode: string;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
}

const RightSide = ({ selectedMode, setSelectedMode }: IRightSide) => {
  const [answers, setAnswers] = useState<string[]>([]);
  return (
    <div className="right-side-block">
      <ChatBotPrewiew />
      <AIInput
        answers={answers}
        setAnswers={setAnswers}
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
      />
    </div>
  );
};

export default RightSide;
