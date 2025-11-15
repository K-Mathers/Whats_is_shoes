import React from "react";
import "./ScrollButton.css";

interface scrollBtn {
  onScrollClick: () => void;
}

const ScrollButton: React.FC<scrollBtn> = ({ onScrollClick }) => {
  return <button onClick={onScrollClick} className="scroll_btn">↓</button>;
};

export default ScrollButton;
