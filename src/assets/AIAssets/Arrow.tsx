import type { ISVGType } from "@/types/SVGTypes";

const Arrow = ({ width = "30", height = "30" }: ISVGType) => {
  return (
    <svg
      fill="#000000"
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
    >
      <polygon points="512,261.5 298.7,90.8 298.7,218.8 0,218.8 0,304.2 298.7,304.2 298.7,432.2 " />
    </svg>
  );
};

export default Arrow;
