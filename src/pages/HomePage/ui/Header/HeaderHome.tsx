import CustomButton from "@/components/CustomButton/CustomButton";

import "./HeaderHome.css";
import Hero from "../Hero/Hero";

const HeaderHome = () => {
  return (
    <header className="header">
      <Hero />
      <div className="start-btn-block">
        <CustomButton
          textButton="START"
          fz="48px"
          padding="30px 100px"
          backgroundColor="#ffde03"
          textColor="#000"
          boxShadow="10px 10px 0px #000"
          transform="rotate(-5deg)"
          hoverTransform="rotate(-5deg) scale(1.1)"
          transition="all 0.3s ease"
        />
      </div>
    </header>
  );
};

export default HeaderHome;
