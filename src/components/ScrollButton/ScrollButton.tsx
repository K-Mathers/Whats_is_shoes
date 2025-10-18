import React, { useRef } from "react";
import CustomButton from "../CustomButton/CustomButton";

interface scrollBtn {
  onScrollClick: () => void;
}

const ScrollButton: React.FC<scrollBtn> = ({ onScrollClick }) => {
  return <button onClick={onScrollClick}>yeah</button>;
  //   chagne all of it
};

export default ScrollButton;
