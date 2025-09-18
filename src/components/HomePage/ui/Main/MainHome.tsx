import React from "react";
import "./MainHome.css";
import CustomButton from "../../../CustomButton/CustomButton";

const MainHome = () => {
  return (
    <>
      <main className="min-h-screen">
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
            <CustomButton
              textButton="START"
              fz="36px"
              padding="15px 60px"
              hoverTransform="rotate(-1deg) scale(1.03)"
              transition="transform 0.2s ease"
              border="5px solid #000"
            />
          </div>
        </section>

        <section>
          <div className="pt-36">
            <p className="font-franchise text-8xl">top collection</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainHome;
