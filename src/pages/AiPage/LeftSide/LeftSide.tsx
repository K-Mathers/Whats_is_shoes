import Arrow from "@/assets/AIAssets/Arrow";
import "./LeftSide.css";
import OpenSidebar from "./ui/OpenSidebar/OpenSidebar";
import { useState } from "react";

interface ILeftSide {
  selectedMode: string;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
}

const LeftSide = ({ selectedMode, setSelectedMode }: ILeftSide) => {
  const [isOpenSide, setIsOpenSide] = useState(true);
  return (
    <>
      <div className={`sidebar-wrapper ${isOpenSide ? "open" : "closed"}`}>
        <aside className="sidebar-aside">
          <OpenSidebar
            isOpen={isOpenSide}
            selectedMode={selectedMode}
            setter={setIsOpenSide}
            setSelectedMode={setSelectedMode}
          />
        </aside>
      </div>

      <button
        className={`sidebar-trigger ${isOpenSide ? "hidden" : ""}`}
        onClick={() => setIsOpenSide(true)}
      >
        <Arrow />
      </button>
    </>
  );
};

export default LeftSide;
