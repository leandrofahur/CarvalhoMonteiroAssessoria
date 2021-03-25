import React from "react";

import Navbar from "../Navbar";
import Carousel from "../Carousel";

import "./index.css";

const Header = ({ children }) => {
  return (
    <header>
      <Navbar />
      {children}
    </header>
  );
};

export default Header;
