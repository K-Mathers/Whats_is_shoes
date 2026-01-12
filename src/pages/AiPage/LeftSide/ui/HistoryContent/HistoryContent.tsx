import Arrow from "@/assets/AIAssets/Arrow";

interface IHistoryContent {
  isOpen: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistoryContent = ({ isOpen, setter }: IHistoryContent) => {
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
