import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

const Homepage = () => {
  return (
    <>
      <Header>
        <Carousel></Carousel>
      </Header>
      <main id="about" className="ui container">
        <div className="ui stackable two column grid">
          <div className="column">I am a grid column</div>
          <div className="column">I am another grid column</div>
          <div className="column"></div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
