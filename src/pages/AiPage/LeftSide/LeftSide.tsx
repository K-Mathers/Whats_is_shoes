import MainVariant from "./ui/MainVariant/MainVariant";

interface ILeftSide {
  selectedMode: string;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
}

const LeftSide = ({ selectedMode, setSelectedMode }: ILeftSide) => {
  return (
    <MainVariant
      selectedMode={selectedMode}
      setSelectedMode={setSelectedMode}
    />
  );
};

export default LeftSide;
