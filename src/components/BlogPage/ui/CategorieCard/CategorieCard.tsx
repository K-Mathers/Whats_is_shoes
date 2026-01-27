import { useEffect, useState } from "react";
import "./CategorieCard.css";
import { getPublicBlog } from "@/api/blog";
import type { IBlog } from "../../type/type";

const CategorieCard = () => {
  const [blogsList, setBlogsList] = useState<IBlog>();
  const getBlogs = async () => {
    const response = await getPublicBlog();
    setBlogsList(response);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (!blogsList)
    return <div className="comic-loader">LOADING ARTICLES...</div>;

  return (
    <section className="cards-section">
      {/* {blogCards.map((el) => {
        return (
          <div>
            <div className="card" key={el.id}>
              <div className="upper-part">
                <p className="card-title">{el.cardTitle}</p>
                <div className="soon-img" />
                <p className="card-description">{el.cardDescription}</p>
                <p className="card-short-description">
                  {el.cardShortDescription}n
                </p>
              </div>
              <div className="lower-part">
                <div className="another-card-block">
                  <div className="soon-img-v2" />
                  <p className="another-card-text">{el.firtAnotherCard}</p>
                </div>
                <div className="another-card-block">
                  <div className="soon-img-v2" />
                  <p className="another-card-text">{el.secondAnotherCard}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
      {blogsList.data.map((el) => {
        return (
          <div>
            <div className="card" key={el.id}>
              <div className="upper-part">
                <p className="card-title">{el.category}</p>
                <img src={el.coverImage} className="soon-image" />
                <p className="card-description">{el.title}</p>
                <p className="card-short-description">{el.shortDescription}</p>
              </div>
              {/* <div className="lower-part">
                <div className="another-card-block">
                  <div className="soon-img-v2" />
                  <p className="another-card-text">{el.firtAnotherCard}</p>
                </div>
                <div className="another-card-block">
                  <div className="soon-img-v2" />
                  <p className="another-card-text">{el.secondAnotherCard}</p>
                </div>
              </div> */}
            </div>
            {/* {index % 3 !== 2 ? <div className="card-separator" /> : ""} */}
          </div>
        );
      })}
    </section>
  );
};

export default CategorieCard;
