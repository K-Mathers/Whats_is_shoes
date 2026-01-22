import { useRef } from "react";
import MainHome from "./ui/Main/MainHome";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import HeaderHome from "./ui/Header/HeaderHome";
import FooterHome from "./ui/Footer/FooterHome";
import "./HomePage.css";
import ComicChat from "@/components/ComicChat/ComicChat";
import jordanRed from "@/assets/AuthAssets/sneaker1.png";
import sneakerBlue from "@/assets/AuthAssets/sneaker2.png";
import burstPow from "@/assets/AuthAssets/burst_pow.png";
import burstZap from "@/assets/AuthAssets/burst_zap.png";

const HomePage = () => {
  const count = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (count.current) {
      count.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="home-page-container">
      <HeaderHome />
      <div className="pt-[2rem] flex justify-center scroll-btn-wrapper">
        <ScrollButton onScrollClick={handleScroll} />
      </div>

      <div className="home-content-wrapper">
        <img src={jordanRed} className="comic-decoration decor-top-left" alt="" />
        <img src={sneakerBlue} className="comic-decoration decor-top-right" alt="" />
        <img src={burstPow} className="comic-decoration decor-bottom-left" alt="" />
        <img src={burstZap} className="comic-decoration decor-bottom-right" alt="" />
        <MainHome ref={count} />
      </div>

      <FooterHome />
      <ComicChat />
    </div>
  );
};

export default HomePage;
