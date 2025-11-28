import type { ISVGType } from "@/types/SVGTypes";

const Warning = ({ width = "20", height = "18" }: ISVGType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.93303 6.99975V8.99975M9.93303 12.9998H9.94303M3.00503 16.9998H16.861C18.401 16.9998 19.363 15.3328 18.593 13.9998L11.665 1.99975C10.895 0.66675 8.97103 0.66675 8.20103 1.99975L1.27303 13.9998C0.50303 15.3328 1.46503 16.9998 3.00503 16.9998Z"
        stroke="#919191"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Warning;
