import Clip from "@/assets/AIAssets/Clip";
import "./AIInput.css";
import Send from "@/assets/AIAssets/Send";
import Voice from "@/assets/AIAssets/Voice";

const AIInput = () => {
  return (
    <div className="input-block">
      <button className="clip-button">
        <Clip />
      </button>
      <input className="ai-input" placeholder="Send a message" type="text" />
      <div className="right-buttons-wrapper">
        <button className="voice-button">
          <Voice />
        </button>
        <button className="send-button">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default AIInput;
