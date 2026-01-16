import { useRef } from "react";
import MainHome from "./ui/Main/MainHome";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import HeaderHome from "./ui/Header/HeaderHome";
import FooterHome from "./ui/Footer/FooterHome";

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
