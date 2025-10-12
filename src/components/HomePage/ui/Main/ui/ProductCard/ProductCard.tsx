import React from "react";
import { useNavigate } from "react-router-dom";

interface Card {
  imageSrc: string;
  title: string;
  containerClassName?: string;
}

const ProductCard = ({ imageSrc, title, containerClassName }: Card) => {
  const navigate = useNavigate();
  
  return (
    <div className={`p-4 ${containerClassName}`}>
      <img src={imageSrc} className="mx-auto mb-4 max-w-full h-auto" />
      <p className="leading-relaxed font-semibold ">{title}</p>
      <button
        onClick={() => navigate("/blog")}
        className="mt-6 bg-[#aa14f0] font-medium text-white py-2 px-6 cursor-pointer shadow-[6px_4px_0_#000] border-2 border-black rounded-md"
      >
        Explore
      </button>
    </div>
  );
};

export default ProductCard;
