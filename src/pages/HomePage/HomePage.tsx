import { useRef } from "react";
import FooterHome from "../../components/HomePage/ui/Footer/FooterHome";
import HeaderHome from "../../components/HomePage/ui/Header/ui/Header/HeaderHome";
import MainHome from "../../components/HomePage/ui/Main/ui/MainHome";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const HomePage = () => {
  const count = useRef<HTMLDivElement | null>(null);

  // change output. We need some like z-index at scroll btn  

  const handleScroll = () => {
    if (count.current) {
      count.current.scrollIntoView({
        behavior: "smooth", // for test
        block: "start", // more effecent
      });
    }
  };
  return (
    <div>
      <HeaderHome />
      <ScrollButton onScrollClick={handleScroll} />
      <MainHome ref={count} />
      <FooterHome />
    </div>
  );
};

export default HomePage;
