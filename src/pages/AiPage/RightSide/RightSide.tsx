import AIInput from "./ui/AIInput/AIInput";
import ChatBotPrewiew from "./ui/ChatBotPrewie/ChatBotPreview";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-side-block">
      <ChatBotPrewiew />
      <AIInput />
    </div>
  );
};

export default RightSide;
