import CategorieCard from "../components/BlogPage/ui/CategorieCard/CategorieCard";
import HeaderBLog from "../components/BlogPage/ui/Header/HeaderBlog";
import SearchBlock from "../components/BlogPage/ui/SearchBlock/SearchBlock";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <HeaderBLog />
      <SearchBlock />
      <CategorieCard />
    </div>
  );
};

export default BlogPage;
