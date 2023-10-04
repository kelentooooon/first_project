import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Nav from "./Navbar";
import Footer from "./Footer";
import img1 from "./img/cloth_1.jpg";
import img2 from "./img/cloth_2.jpg";

const cart = () => {
  return (
    <div>
      <Nav />
      <div className="url">
        <div className="container">
          <div>
            <h3>
              <Link to="/">Home</Link>
            </h3>
            <span>/</span>
            <h3>Cart</h3>
          </div>
        </div>
      </div>
      <div className="cart-table">
        <div className="container">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="img">
                    <img src={img1} alt="" />
                  </td>
                  <td>
                    <h3>Top Up T-Shirt</h3>
                  </td>
                  <td>
                    <p className="price">$49.00</p>
                  </td>
                  <td>
                    <p className="quantity">
                      <div className="input--">
                        <button className="btn btn-">-</button>
                      </div>
                      <input type="text" value="1" className="counter" />
                      <div className="input-">
                        <button className="btn btn+">+</button>
                      </div>
                    </p>
                  </td>
                  <td>
                    <p className="price">$49.00</p>
                  </td>
                  <td>
                    <button className="btn rev">x</button>
                  </td>
                </tr>
                <tr>
                  <td className="img">
                    <img src={img2} alt="" />
                  </td>
                  <td>
                    <h3>Polo Shirt</h3>
                  </td>
                  <td>
                    <p className="price">$49.00</p>
                  </td>
                  <td>
                    <p className="quantity">
                      <div className="input--">
                        <button className="btn btn-">-</button>
                      </div>
                      <input type="text" value="1" className="counter" />
                      <div className="input-">
                        <button className="btn btn+">+</button>
                      </div>
                    </p>
                  </td>
                  <td>
                    <p className="price">$49.00</p>
                  </td>
                  <td>
                    <button className="btn rev">x</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="offer">
        <div className="container">
          <div className="row">
            <div className="copon col-lg-7 col-12">
              <div className="row update">
                <button className="btn up col-5">Update Cart</button>
                <button className="btn con col-6">Continue Shopping</button>
              </div>
              <div className="row cop">
                <h3>Coupon</h3>
                <p>Enter your coupon code if you have one.</p>
                <form action="">
                  <input className="col-8" type="text" placeholder="Coupon Code" />
                  <button className="btn col-3">Apply Coupon</button>
                </form>
              </div>
            </div>
            <div className="reset col-lg-3 col-12">
              <h3>Cart Totals</h3>
              <ul>
                <li>
                  <span>Subtotal</span>
                  <span>$230.00</span>
                </li>
                <li>
                  <span>Total</span>
                  <span>$230.00</span>
                </li>
              </ul>
              <Link to="/Shop/Pro/Cart/CheckOut">
                <button className="btn">Proceed To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default cart;
