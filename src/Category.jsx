import React from "react";
import "./Category.css";
import wonen from "./img/women.jpg";
import children from "./img/children.jpg";
import men from "./img/men.jpg";
import { Link } from "react-router-dom";

const category = () => {
  return (
    <div className="Category">
      <div className="container">
        <div className="cards">
        <div className="cat-card col-lg-4 col-md-6 col-10">
          <Link>
            <div className="img">
            <img src={wonen} alt="" />
            </div>
            <div className="text">
              <p>collection</p>
              <h3>women</h3>
            </div>
          </Link>
        </div>

        <div className="cat-card col-lg-4 col-md-6 col-10">
          <Link>
            <div className="img">
            <img src={children} alt="" />
            </div>
            <div className="text">
              <p>collection</p>
              <h3>children</h3>
            </div>
          </Link>
        </div>

        <div className="cat-card col-lg-4 col-md-6 col-10">
          <Link>
            <div className="img">
            <img src={men} alt="" />
            </div>
            <div className="text">
              <p>collection</p>
              <h3>men</h3>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default category;
