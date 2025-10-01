import CustomButton from "../../../CustomButton/CustomButton";
import "./CreateArticle.css";

const CreateArticle = () => {
  return (
    <div className="create-article-block">
      <div className="text-block">
        <p className="create-article-title">Wanna create article?</p>
        <p className="create-article-description">
          Let’s go, just read our docs and click button
        </p>
      </div>
      <CustomButton
        transition="transform 0.2s ease"
        fz="30px"
        width="200px"
        height="76px"
        textButton="GO!"
        hoverTransform="scale(1.05)"
      />
    </div>
  );
};

export default CreateArticle;
