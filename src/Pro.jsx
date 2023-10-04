import React from "react";
import "../src/Pro.css";
import Navbar from "../src/Navbar";
import FeaturedProducts from "../src/FeaturedProducts";
import Footer from "../src/Footer";
import { Link } from "react-router-dom";
import img from "../src/img/cloth_1.jpg";

const Pro = () => {
  return (
    <div>
      <Navbar />

      <div className="url">
        <div className="container">
          <div>
            <h3>
              <Link to="/">Home</Link>
            </h3>
            <span>/</span>
            <h3>Tank Top T-Shirt</h3>
          </div>
        </div>
      </div>

      <div className="pro">
        <div className="row">
          <div className="img col-lg-6 col-md-12">
            <img src={img} alt="" />
          </div>
          <div className="pro-info col-lg-6 col-md-12">
            <h3>Tank Top T-Shirt</h3>
            <p className="discribtion">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores
              iusto! Molestiae expedita veritatis nesciunt doloremque sint
              asperiores fuga voluptas, distinctio, aperiam, ratione dolore.
            </p>
            <p className="discribtion">
              Ex numquam veritatis debitis minima quo error quam eos dolorum
              quidem perferendis. Quos repellat dignissimos minus, eveniet nam
              voluptatibus molestias omnis reiciendis perspiciatis illum hic
              magni iste, velit aperiam quis.
            </p>
            <p className="price">$50.00</p>
            <div className="size">
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span>Small</span>
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span>Medium</span>
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span>Large</span>
              </label>
              <label htmlFor="">
                <input type="radio" name="" id="" />
                <span>Extra Large</span>
              </label>
            </div>
            <div className="count">
              <div className="input--">
                <button className="btn btn-">-</button>
              </div>
              <input type="text" value="1" className="counter" />
              <div className="input-">
                <button className="btn btn+">+</button>
              </div>
            </div>
            <Link to="/Shop/Pro/Cart" className="btn btn-add">ADD TO CART</Link>
          </div>
        </div>
      </div>

      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Pro;
