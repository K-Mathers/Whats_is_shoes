import React from "react";
import LogoSVG from "../../../../assets/HeaderAssets/LogoSVG/LogoSVG";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="link-block">
      <div className="logo-block">
        <LogoSVG />
        <a className="logo-text" href="/">
          WIS
        </a>
      </div>
      <div className="routes-block">
        <a className="header-link" href="/">
          HOME
        </a>
        <a className="header-link" href="">
          BLOG
        </a>
        <a className="header-link" href="">
          AI GUIDE
        </a>
        <a className="header-link" href="/login">
          LOGIN
        </a>
      </div>
    </div>
  );
};

export default Hero;
