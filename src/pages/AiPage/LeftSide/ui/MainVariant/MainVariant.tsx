import "./MainVariant.css";
import { useState } from "react";
import Arrow from "@/assets/AIAssets/Arrow";
import OpenSidebar from "../OpenSidebar/OpenSidebar";

const MainVariant = () => {
  const [isOpenSide, setIsOpenSide] = useState<boolean>(true);

  // const sidebarClass = `sidebar-container ${!isOpenSide ? "closed" : ""}`;
  return (
    <div>
      {isOpenSide ? (
        <OpenSidebar isOpen={isOpenSide} setter={setIsOpenSide} />
      ) : (
        <aside className="closed-sidebar">
          <div
            onClick={() => setIsOpenSide(!isOpenSide)}
            className="arrow-svg closed"
          >
            <Arrow />
          </div>
        </aside>
      )}
      {/* <aside className={sidebarClass}>
        <OpenSidebar isOpen={isOpenSide} setter={setIsOpenSide} />
      </aside>
      <div onClick={() => setIsOpenSide(!isOpenSide)} className="arrow-button">
        <Arrow />
      </div> */}
    </div>
  );
};

export default MainVariant;
