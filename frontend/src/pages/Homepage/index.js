import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import "./index.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // use Effect to keep track of the browser window width:
  useEffect(() => {
    const handleWindowSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <>
      <Header>
        <Carousel></Carousel>
      </Header>

      <main id="about" className="ui container">
        <div className="ui stackable two column grid">
          <div className="column myImage">
            <div className="ui medium middle aligned image">
              <img src="/images/profile2.jpeg"></img>
            </div>
          </div>
          <div className="column">
            <div className={width > 760 ? `division` : null}>
              <h1 className="ui header">Sobre Mim</h1>
              <div className="botton-line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo tempora numquam veritatis aliquam rerum ullam nihil,
                dolore eius totam, pariatur quaerat saepe dolores nemo cum.
              </p>
              <Link to="sobre">
                <button className="ui button fluid red">Leia Mais</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ui stackable two column grid">
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
