import LogoSVG from "@/assets/HeaderAssets/LogoSVG/LogoSVG";
import "./LeftSide.css";
import OpenSidebar from "./ui/OpenSidebar/OpenSidebar";
import { useState } from "react";

interface ILeftSide {
  sessionId: string | undefined;
  selectedMode: string;
  setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
}

const LeftSide = ({ selectedMode, setSelectedMode }: ILeftSide) => {
  const [isOpenSide, setIsOpenSide] = useState(true);
  return (
    <>
      <button
        className={`sidebar-trigger ${isOpenSide ? "hidden" : ""}`}
        onClick={() => setIsOpenSide(true)}
      >
        <LogoSVG />
      </button>
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
    </>
  );
};

export default LeftSide;
