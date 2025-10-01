import { blogCards } from "../../lib";
import "./CategorieCard.css";

const CategorieCard = () => {
  return (
    <section className="cards-section">
      {blogCards.map((el) => {
        return (
          <div className="card" key={el.id}>
            <div className="upper-part">
              <p className="card-title">{el.cardTitle}</p>
              <div className="soon-img" />
              <p className="card-description">{el.cardDescription}</p>
              <p className="card-short-description">
                {el.cardShortDescription}
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
        );
      })}
    </section>
  );
};

export default CategorieCard;
