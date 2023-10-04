import React from "react";
import "./thanks.css";
import { Link } from "react-router-dom";
import Nav from "./Navbar";
import Footrt from "./Footer";
import {FaCheckCircle} from "react-icons/fa"

const thanks = () => {
  return (
    <>
      <Nav />
      <div className="thank">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <span className="icon">
                <FaCheckCircle />
              </span>
              <h3>Thank you!</h3>
              <p>You order was successfuly completed.</p>
              <Link to="/Shop">
                <button className="btn">Back to shop</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footrt />
    </>
  );
};

export default thanks;
