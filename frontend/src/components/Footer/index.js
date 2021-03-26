import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Footer = () => {
  return (
    <div className="ui stackable two column grid">
      <div className="column myColumn">
        <h4 className="ui header">Siga-nos nas redes sociais</h4>
      </div>
      <div className="column" style={{ textAlign: "center" }}>
        <Link
          to="//facebook.com/"
          target="_blanck"
          style={{ padding: "0rem 0.3rem" }}
        >
          <button className="circular ui icon facebook button">
            <i className="facebook icon"></i>
          </button>
        </Link>
        <Link
          to="//linkedin.com/"
          target="_blanck"
          style={{ padding: "0rem 0.3rem" }}
        >
          <button className="circular ui icon linkedin button">
            <i className="linkedin icon"></i>
          </button>
        </Link>
        <Link
          to="//gmail.com/"
          target="_blanck"
          style={{ padding: "0rem 0.3rem" }}
        >
          <button className="circular ui icon google plus button">
            <i className="google plus icon"></i>
          </button>
        </Link>
        <Link
          to="//instagram.com/"
          target="_blanck"
          style={{ padding: "0rem 0.3rem" }}
        >
          <button className="circular ui icon instagram button">
            <i className="instagram icon"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
