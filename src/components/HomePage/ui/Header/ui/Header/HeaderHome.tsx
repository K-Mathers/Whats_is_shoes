import CustomButton from "../../../../../CustomButton/CustomButton";
import Hero from "../../../Hero/Hero";
import "./HeaderHome.css";

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
          border="5px solid #000"
        />
      </div>
      <div></div>
    </header>
  );
};

export default HeaderHome;
