import LogoSVG from "../../../../../../assets/HeaderAssets/LogoSVG/LogoSVG";
import CustomButton from "../../../../../CustomButton/CustomButton";
import "./HeaderHome.css";

const HeaderHome = () => {
  return (
    <header className="header">
      <div className="link-block">
        <div className="logo-block">
          <LogoSVG />
          <p className="logo-text">WIS</p>
        </div>
        <div className="routes-block">
          <a className="header-link" href="">
            HOME
          </a>
          <a className="header-link" href="">
            BLOG
          </a>
          <a className="header-link" href="">
            AI
          </a>
          <a className="header-link" href="">
            NEW
          </a>
          <a className="header-link" href="">
            LOGIN
          </a>
        </div>
      </div>
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
