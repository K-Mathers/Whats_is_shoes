import "./SocialButtons.css";

const socialIcons = [
  {
    src: "/google.svg",
    alt: "google",
  },
  {
    src: "/github.svg",
    alt: "github",
  },
  {
    src: "/facebook.svg",
    alt: "facebook",
  },
];

export const SocialButtons = () => {
  return (
    <div className="social-buttons-container">
      {socialIcons.map((icon) => (
        <a key={icon.alt}>
          <button className="social-button" type="button">
            <img
              src={icon.src}
              alt={icon.alt}
              className="social-icon"
            />
          </button>
        </a>
      ))}
    </div>
  );
};

