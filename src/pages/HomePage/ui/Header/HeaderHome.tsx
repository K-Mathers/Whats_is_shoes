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
          padding="20px 80px"
          transform="rotate(-5deg)"
          hoverTransform="rotate(-5deg) scale(1.05)"
          transition="transform 0.2s ease"
        />
      </div>
    </header>
  );
};

export default HeaderHome;
