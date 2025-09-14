import LogoSVG from "../../../../assets/HeaderAssets/LogoSVG/LogoSVG";
import "./Header.css";

const Header = () => {
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
        <button className="start-btn">START</button>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
