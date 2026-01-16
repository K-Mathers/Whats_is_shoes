import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import LogoSVG from "@/assets/HeaderAssets/LogoSVG/LogoSVG";
import { getUser } from "@/api/auth";

interface IHero {
  backgroundColor?: string;
}

const Hero: React.FC<IHero> = ({ backgroundColor }) => {
  const [isUserExist, setIsUserExist] = useState(null);

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await getUser();
        setIsUserExist(response);
      } catch (err) {
        console.log(err);
      }
    };
    userData();
  }, []);

  return (
    <div className={`link-block ${backgroundColor}`}>
      <div className="logo-block">
        <LogoSVG />
        <Link className="logo-text" to="/">
          WIS
        </Link>
      </div>
      <div className="routes-block">
        <Link className="header-link" to="/">
          HOME
        </Link>
        <Link className="header-link" to="/blog">
          BLOG
        </Link>
        <Link className="header-link" to="/ai">
          AI GUIDE
        </Link>
        {isUserExist ? (
          <Link className="header-link" to="/profile">
            PROFILE
          </Link>
        ) : (
          <Link className="header-link" to="/login">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
