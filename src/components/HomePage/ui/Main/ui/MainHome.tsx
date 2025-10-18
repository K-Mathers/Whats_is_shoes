import React from "react";
import "./MainHome.css";
import star from "../../../../../../public/Star_1.png";
import star2 from "../../../../../../public/Star_2.png";
import ProductCard from "./ProductCard/ProductCard";
import legendarySneakers from "../../../../../../public/Adidas_SuperStar.png";
import coolColorways from "../../../../../../public/Nike_adjust1.png";
import walkingShoes from "../../../../../../public/Nb_wrdp.png";
import whiteShoes from "../../../../../../public/Air_max90.png";
import CustomButton from "../../../../CustomButton/CustomButton";
import airMax97 from "../../../../../../public/Air_max97.png";
import spezial from "../../../../../../public/Adidas_spezial.png";
import nb1906D from "../../../../../../public/Nb_1906D.png";

const MainHome = React.forwardRef<any>((props, ref) => {
  return (
    <>
      <main ref={ref} className="min-h-screen overflow-hidden">
        <section className="pt-24 pb-12 flex">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h2 className="font-franchise text-8xl">10K+</h2>
              <p className="font-inria text-4xl font-bold uppercase">
                User trust us
              </p>
            </div>
          </div>

          <div className="w-0.5 h-200 bg-black"></div>

          <div className="text-center">
            <h2 className="font-franchise text-8xl">30K+</h2>
            <p className="font-inria text-4xl font-bold uppercase">
              brand CHANNEL
            </p>
          </div>

          <div className="w-0.5 h-200 bg-black"></div>

          <div className="text-center">
            <h2 className="font-franchise text-8xl">1K+</h2>
            <p className="font-inria text-4xl font-bold uppercase">TOPICS</p>
          </div>
        </section>

        <section className="flex items-center justify-between relative py-16">
          <div className="flex-1 flex justify-center max-w-lg">
            <img
              className="absolute pt-14 top-0 left-0"
              src="/Trending_block.png"
            />
          </div>

          <div className="flex-1 pt-36 max-w-2xl flex flex-col justify-center items-start">
            <p className="font-franchise text-6xl lg:text-8xl mb-4">
              TRENDING SHOES OF THE DAY
            </p>
            <p className="text-xl font-normal leading-relaxed pb-16">
              Sneaker of the day: discover what’s hot, what’s rare, and what’s
              next. Every day we highlight the sneakers that define the culture.
            </p>

            <div className="flex ml-[0px]">
              <CustomButton
                textButton="START"
                fz="29px"
                padding="15px 60px"
                hoverTransform="rotate(-1deg) scale(1.03)"
                transition="transform 0.2s ease"
                border="5px solid #000"
              />
            </div>
          </div>
        </section>

        <section className="pt-24 relative min-h-screen">
          <div className="w-full h-full">
            <p className="font-franchise absolute top-[15%] left-[5%] md:left-[10%] z-10 text-8xl">
              top
              <br />
              collection
            </p>

            <img src={star} className="absolute top-[5%] left-[2%]" />
            <img src={star2} className="absolute top-[-20%] right-[2%]" />
            <img src={star} className="absolute bottom-[-20%] left-[10%]" />

            <ProductCard
              imageSrc={legendarySneakers}
              title="The Legendary Sneakers"
              containerClassName="absolute top-[30%] left-[5%] md:left-[10%] w-413 z-20 pt-[100px]"
            />

            <ProductCard
              imageSrc={coolColorways}
              title="The Cool Colorways"
              containerClassName="absolute top-[45%] left-1/2 -translate-x-1/2 w-413 z-20 pt-[100px]"
            />

            <ProductCard
              imageSrc={walkingShoes}
              title="The Best Walking Shoes"
              containerClassName="absolute bottom-[-20%] right-[5%] md:right-[10%] w-413 z-20 pt-[100px]"
            />

            <div className="absolute top-[-10%] -right-6 z-20">
              <div className="-rotate-15 ">
                <img src={whiteShoes} className="" />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-96 relative">
          <div className="flex flex-col items-center justify-center mb-36">
            <p className="uppercase font-franchise text-[112px] leading-[110%]">
              most popular
            </p>
            <p className="text-[29px] Inria Sans">
              Here’s Our most popular articles. People tend to love whatever is
              in here.
            </p>
          </div>

          <div className="flex justify-center items-start gap-4 w-full p-8 relative">
            <div className="flex-1 flex flex-col justify-center items-end max-w-[500px]">
              <div className="font-franchise text-[68px] flex flex-col gap-4 text-left">
                <p>PREMIUM COLLECTION</p>
                <p className="text-[#e82e43]">BEST MINIMALS</p>
                <p>CRAZY SHOES</p>
                <p>NEW SHOES</p>
              </div>
            </div>

            <img src={star} className="absolute top-[60%] left-[97.5%]" />

            <div className="flex-1 flex justify-start items-center relative min-h-[600px] left-64">
              <div className="absolute top-0 left-60 z-30">
                <img src={airMax97} className="" />
              </div>
              <div className="absolute top-[5%] left-[30%] z-20">
                <img src={spezial} className="" />
              </div>
              <div className="absolute top-[5%] left-[40%] z-10">
                <img src={nb1906D} className="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});

export default MainHome;
