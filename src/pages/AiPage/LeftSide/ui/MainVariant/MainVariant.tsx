import "./MainVariant.css";
import { useState } from "react";
import Arrow from "@/assets/AIAssets/Arrow";
import OpenSidebar from "../OpenSidebar/OpenSidebar";

interface IMainVariant {
  selectedMode: string;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
}

const MainVariant = ({ selectedMode, setSelectedMode }: IMainVariant) => {
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

export default MainVariant;
