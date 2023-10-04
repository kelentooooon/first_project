import React from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import Nav from "./Navbar";
import Footer from "./Footer";

const CheckOut = () => {
  return (
    <>
      <Nav />

      <div className="url">
        <div className="container">
          <div>
            <h3>
              <Link to="/">Home</Link>
            </h3>
            <span>/</span>
            <h3>
              <Link to="/Shop/Pro/Cart">Cart</Link>
            </h3>
            <span>/</span>
            <h3>CheckOut</h3>
          </div>
        </div>
      </div>
      <div className="foorm">
        <div className="container">
          <div className="retairn">
            <p>
              Returning customer? <a href="">Click here</a> to login
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 col-12 com-info">
              <label className="h3 py-3" htmlFor="">
                Billing Details
              </label>
              <div class="p-3 p-lg-5 border">
                <div class="form-group">
                  <label for="c_country" class="text-black h5">
                    Country <span class="text-danger">*</span>
                  </label>
                  <select id="c_country" class="form-control p-2 fs-6">
                    <option value="1">Select a country</option>
                    <option value="2">bangladesh</option>
                    <option value="3">Algeria</option>
                    <option value="4">Afghanistan</option>
                    <option value="5">Ghana</option>
                    <option value="6">Albania</option>
                    <option value="7">Bahrain</option>
                    <option value="8">Colombia</option>
                    <option value="9">Dominican Republic</option>
                  </select>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black h5">
                      First Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_fname"
                      name="c_fname"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black h5">
                      Last Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_lname"
                      name="c_lname"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_companyname" class="text-black h5">
                      Company Name{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_companyname"
                      name="c_companyname"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_address" class="text-black h5">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control p-2 fs-6"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>

                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_state_country" class="text-black h5">
                      State / Country <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_state_country"
                      name="c_state_country"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_postal_zip" class="text-black h5">
                      Posta / Zip <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_postal_zip"
                      name="c_postal_zip"
                    />
                  </div>
                </div>

                <div class="form-group row mb-5">
                  <div class="col-md-6">
                    <label for="c_email_address" class="text-black h5">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_email_address"
                      name="c_email_address"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_phone" class="text-black h5">
                      Phone <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control p-2 fs-6"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label
                    for="c_create_account"
                    class="text-black check py-2"
                    data-toggle="collapse"
                    href="#create_an_account"
                    role="button"
                    aria-expanded="false"
                    aria-controls="create_an_account"
                  >
                    <input type="checkbox" value="1" id="c_create_account" />{" "}
                    Create an account?
                  </label>
                </div>

                <div class="form-group">
                  <label
                    for="c_ship_different_address"
                    class="text-black check py-2"
                    data-toggle="collapse"
                    href="#ship_different_address"
                    role="button"
                    aria-expanded="false"
                    aria-controls="ship_different_address"
                  >
                    <input
                      type="checkbox"
                      value="1"
                      id="c_ship_different_address"
                    />{" "}
                    Ship To A Different Address?
                  </label>
                </div>

                <div class="form-group">
                  <label for="c_order_notes" class="text-black py-2">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 com-info">
              <label className="h3 py-3" htmlFor="">
                Coupon Code
              </label>
              <div class="p-3 p-lg-5 border">
                <label for="c_code" class="text-black mb-3 fs-5">
                  Enter your coupon code if you have one
                </label>
                <div class="input-group w-75">
                  <input
                    type="text"
                    class="form-control"
                    id="c_code"
                    placeholder="Coupon Code"
                    aria-label="Coupon Code"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary btn-sm"
                      type="button"
                      id="button-addon2"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <label className="h3 py-3" htmlFor="">
                Your Order
              </label>
              <div class="p-3 p-lg-5 border">
                <table class="table site-block-order-table mb-5">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Top Up T-Shirt <strong class="mx-2">x</strong> 1
                      </td>
                      <td>$250.00</td>
                    </tr>
                    <tr>
                      <td>
                        Polo Shirt <strong class="mx-2">x</strong> 1
                      </td>
                      <td>$100.00</td>
                    </tr>
                    <tr>
                      <td class="text-black">
                        <strong>Cart Subtotal</strong>
                      </td>
                      <td class="text-black">$350.00</td>
                    </tr>
                    <tr>
                      <td class="text-black">
                        <strong>Order Total</strong>
                      </td>
                      <td class="text-black">
                        <strong>$350.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="border p-3 mb-4">
                  <h3 class="h6 mb-0">
                    <a class="d-block" role="button">
                      Direct Bank Transfer
                    </a>
                  </h3>
                </div>

                <div class="border p-3 mb-4">
                  <h3 class="h6 mb-0">
                    <a class="d-block" role="button">
                      Cheque Payment
                    </a>
                  </h3>
                </div>

                <div class="border p-3 mb-5">
                  <h3 class="h6 mb-0">
                    <a class="d-block" role="button">
                      Paypal
                    </a>
                  </h3>
                </div>

                <div class="form-group">
                  <Link to="/Shop/Pro/Cart/CheckOut/Thanks">
                    {" "}
                    <button
                      class="btn btn-primary btn-lg py-3 btn-block"
                      onclick="window.location='thankyou.html'"
                    >
                      Place Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckOut;
