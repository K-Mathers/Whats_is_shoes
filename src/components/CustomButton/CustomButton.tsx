import React from "react";

interface ICustomButton {
  textButton?: React.ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
  padding?: string;
  fz?: string;
  transform?: string;
  transition?: string;
  textColor?: string;
  cursor?: string;
  boxShadow?: string;
  border?: string;
  borderRadius?: string;
}

const CustomButton: React.FC<ICustomButton> = ({
  textButton,
  width,
  height,
  backgroundColor,
  padding,
  fz,
  transform,
  transition,
  textColor,
  cursor,
  boxShadow,
  border,
  borderRadius,
}) => {
  const style = {
    width,
    color: textColor,
    height,
    backgroundColor,
    padding,
    fontSize: fz,
    transform,
    cursor,
    transition,
    boxShadow,
    border,
    borderRadius,
  };
  return (
    <div>
      <button style={style}>{textButton}</button>
    </div>
  );
};

export default CustomButton;
