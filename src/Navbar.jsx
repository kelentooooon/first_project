import React from "react";
import "./Navbar.css";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="first-nav">
        <div className="container">
          <div className="nav-icon">
            <div className="left col-lg-3 col-md-3 col-sm-1 col-4 ">
              <form>
                <span className="icons">
                  <FaSearch />
                </span>
                <input type="text" placeholder="search" />
              </form>
            </div>
            <div className="mid col-lg-3 col-md-4 col-sm-6 d-none d-sm-block ">
              <Link to="/">
                <h2>ehab mohamed</h2>
              </Link>
            </div>
            <div className="right col-lg-3 col-md-3 col-sm-1 col-4 ">
              <ul>
                <li>
                  <Link to="/">
                    <span className="icons">
                      <BsPersonFill />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="icons">
                      <FaRegHeart />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="icons">
                      <FaCartShopping />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="second-nav">
        <div className="nav-links">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Shop'>Shop</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
