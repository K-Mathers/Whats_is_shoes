import { useRef } from "react";
import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";
import HeaderHome from "../../components/HomePage/ui/Header/ui/Header/HeaderHome";
import MainHome from "../../components/HomePage/ui/Main/ui/MainHome";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

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
    <div>
      <HeaderHome />
      <div className="pt-[2rem] flex justify-center">
        <ScrollButton onScrollClick={handleScroll} />
      </div>
      <MainHome ref={count} />
      <FooterHome />
    </div>
  );
};

export default HomePage;
