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
    <div className="flex justify-center gap-[17px] mb-[20px]">
      {socialIcons.map((icon) => (
        <a key={icon.alt}>
          <button
            className="flex justify-center items-center cursor-pointer rounded-lg bg-[#fff] w-[72px] h-[35px]"
            type="button"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              width={32}
              height={32}
              className="w-[18px] h-[18px]"
            />
          </button>
        </a>
      ))}
    </div>
  );
};
