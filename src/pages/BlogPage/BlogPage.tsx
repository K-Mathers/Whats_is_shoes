import "./BlogPage.css";
import CategorieCard from "../../components/BlogPage/ui/CategorieCard/CategorieCard";
import SearchBlock from "../../components/BlogPage/ui/SearchBlock/SearchBlock";
import CreateArticle from "../../components/BlogPage/ui/CreateArticle/CreateArticle";
import FooterHome from "../HomePage/ui/Footer/FooterHome";
import Hero from "../HomePage/ui/Hero/Hero";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Hero />
      <SearchBlock />
      <CategorieCard />
      <CreateArticle />
      <FooterHome />
    </div>
  );
};

export default BlogPage;
