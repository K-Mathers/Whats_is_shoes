import LogoSVG from "../../../../assets/HeaderAssets/LogoSVG/LogoSVG";
import "./HeaderBlog.css";

const Header = () => {
  return (
    <header className="blog-header">
      <div className="header-left-block">
        <LogoSVG />
        <p className="blog-header-title">WIS</p>
      </div>
      <div className="header-right-block">
        <a href="/">HOME</a>
        <a href="/blog">BLOG</a>
        <a href="#">AI</a>
        <a href="#">CREATING</a>
        <a href="#">LOGIN</a>
      </div>
    </header>
  );
};

export default Header;
