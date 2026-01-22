import { useNavigate } from "react-router-dom";

interface Card {
  imageSrc: string;
  title: string;
  containerClassName?: string;
}

const ProductCard = ({ imageSrc, title, containerClassName }: Card) => {
  const navigate = useNavigate();

  return (
    <div className={`p-6 bg-white border-4 border-black shadow-[12px_12px_0px_#000] transform hover:scale-105 transition-transform duration-200 ${containerClassName}`}>
      <img src={imageSrc} className="mx-auto mb-6 max-w-full h-auto" />
      <p className="leading-relaxed font-black text-2xl uppercase font-comic">{title}</p>
      <button
        onClick={() => navigate("/blog")}
        className="mt-6 bg-[#ffde03] font-black text-black text-xl py-3 px-8 cursor-pointer shadow-[6px_6px_0_#000] border-4 border-black hover:bg-[#e74c3c] hover:text-white transition-colors duration-200 uppercase"
      >
        Explore
      </button>
    </div>
  );
};

export default ProductCard;
