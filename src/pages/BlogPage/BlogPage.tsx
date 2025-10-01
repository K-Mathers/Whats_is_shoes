import "./BlogPage.css";
import CategorieCard from "../../components/BlogPage/ui/CategorieCard/CategorieCard";
import HeaderBLog from "../../components/BlogPage/ui/Header/HeaderBlog";
import SearchBlock from "../../components/BlogPage/ui/SearchBlock/SearchBlock";
import CreateArticle from "../../components/BlogPage/ui/CreateArticle/CreateArticle";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <HeaderBLog />
      <SearchBlock />
      <CategorieCard />
      <CreateArticle />
    </div>
  );
};

export default BlogPage;
