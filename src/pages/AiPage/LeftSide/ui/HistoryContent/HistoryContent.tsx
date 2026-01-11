import Arrow from "@/assets/AIAssets/Arrow";
import type { IContent } from "../ModeContent/ModeContent";

const HistoryContent = ({ isOpen, setter }: IContent) => {
  return (
    <div>
      <p>History</p>
      <div onClick={() => setter(!isOpen)} className="arrow-svg">
        <Arrow />
      </div>
    </div>
  );
};

export default HistoryContent;
