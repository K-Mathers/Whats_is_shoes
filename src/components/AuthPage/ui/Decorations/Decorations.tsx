import React from "react";
import { decorations } from "./config";
import "./Decorations.css"

const Decorations = () => {
  return (
    <div>
      {decorations.map((item, index) => (
        <img
          src={item.src}
          alt={item.alt}
          key={index}
          width={item.width}
          height={item.height}
          className={`background__decorations__container ${item.className}`}
        />
      ))}
    </div>
  );
};

export default Decorations;
