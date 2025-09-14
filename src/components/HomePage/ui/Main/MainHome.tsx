import React from "react";
import "./MainHome.css";

const MainHome = () => {
  return (
    <>
      <main className="home_main_wrapper">
        <section className="stats_main">
          <div className="">
            <h2 className="font-franchise text-8xl">10K+</h2>
            <p className="font-inria text-4xl font-bold uppercase">
              User trust us
            </p>
          </div>
          <div className="">
            <h2 className="font-franchise text-8xl">30K+</h2>
            <p className="font-inria text-4xl font-bold uppercase">
              brand CHANNEL
            </p>
          </div>
          <div className="">
            <h2 className="font-franchise text-8xl">1K+</h2>
            <p className="font-inria text-4xl font-bold uppercase">TOPICS</p>
          </div>
        </section>
      </main>

      <section className="relative flex">
        <img className="" src="/public/Trending_block.png" />
        <p className="font-franchise text-8xl">trending shoes of the day</p>
      </section>
    </>
  );
};

export default MainHome;
