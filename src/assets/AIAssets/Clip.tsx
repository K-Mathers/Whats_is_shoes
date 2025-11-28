import type { ISVGType } from "@/types/SVGTypes";

const Clip = ({ width = "16", height = "18" }: ISVGType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9162 8.48014L8.31107 15.0852C6.5133 16.883 3.81711 17.0953 1.98416 15.2624C0.186387 13.4646 0.420038 10.8601 2.25299 9.02716L9.67782 1.60233C10.8142 0.465969 12.6436 0.465969 13.78 1.60233C14.9163 2.73869 14.9163 4.56812 13.78 5.70448L6.22477 13.2597C5.65838 13.8261 4.74008 13.8261 4.17369 13.2597C3.6073 12.6933 3.6073 11.775 4.17369 11.2086L10.9092 4.47313"
        stroke="#919191"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Clip;
