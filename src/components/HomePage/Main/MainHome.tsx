import React from "react";
import "./MainHome.css";

const MainHome = () => {
  return (
    <div className="home_main">
      <div className="start_item">
        <h2 className="font-franchise text-8xl">10K+</h2>
        <p className="font-inria text-4xl font-bold uppercase">User trust us</p>
      </div>

      <div className="start_item">
        <h2 className="font-franchise text-8xl">30K+</h2>
        <p className="font-inria text-4xl font-bold uppercase">brand CHANNEL</p>
      </div>

      <div className="start_item">
        <h2 className="font-franchise text-8xl">1K+</h2>
        <p className="font-inria text-4xl font-bold uppercase">TOPICS</p>
      </div>
    </div>
  );
};

export default MainHome;
