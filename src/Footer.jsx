import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Img from './img/hero_1.jpg'
import { FaLocationDot , FaHeart} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";




const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="navigation col-lg-5 col-md-6 col-12">
              <div className="head">
                <h3>navigation</h3>
              </div>
              <div className="links">
                <div className="list">
                  <ul>
                    <li><Link>Sell online</Link></li>
                    <li><Link>Features</Link></li>
                    <li><Link>Shopping cart</Link></li>
                    <li><Link>Store builder</Link></li>
                  </ul>
                </div>
                <div className="list">
                  <ul>
                    <li><Link>Mobile commerce</Link></li>
                    <li><Link>Dropshipping</Link></li>
                    <li><Link>Website development</Link></li>
                  </ul>
                </div>
                <div className="list">
                  <ul>
                    <li><Link>Point of sale</Link></li>
                    <li><Link>Hardware</Link></li>
                    <li><Link>Software</Link></li>
                  </ul>
                </div>
              </div>
          </div>
          <div className="promo col-lg-3 col-md-6 col-12">
              <div className="head">
                    <h3>promo</h3>
              </div>
              <Link>
                <div className="promo-info">
                  <img src={Img} alt="" />
                  <h3>Finding Your Perfect Shoes</h3>
                  <p>Promo from nuary 15 — 25, 2019</p>
                </div>
              </Link>
          </div>
          <div className="info col-lg-3 col-md-12 col-12">
            <div className="contact">
              <div className="head">
                    <h3>contact-info</h3>
              </div>
              <ul>
                <li className="location">
                  <span><FaLocationDot /></span>
                  <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                </li>
                <li className="phone">
                  <span><FaPhoneAlt /></span>
                  <Link to='tel://+201064546515'>+20 106 454 6515</Link>

                </li>
                <li className="mail">
                  <span><GrMail /></span>
                  <p>ehapm5678@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="subscribe">
              <div className="head">
                    <h3>subscribe</h3>
              </div>
              <form>
                <input className="" type="text" placeholder="Email" />
                <Link><button type="submit">SEND</button></Link>
              </form>
            </div>
          </div>
        </div>
        <div className="cobyright">
          <div>
            <p>
            Copyright © 2023 All rights reserved | This template is made with <span><FaHeart /></span> by <Link to="/" >ehab mohamed</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
