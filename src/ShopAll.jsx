import React from "react";
import "./ShopAll.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import cloth_1 from "./img/cloth_1.jpg";
import cloth_2 from "./img/cloth_2.jpg";
import cloth_3 from "./img/cloth_3.jpg";

function ShopAll() {
  return (
    <div className="All">
      <div className="container">
        <div className="row">
          <div className="sort col-lg-3 col-md-4">
            <div className="cat">
              <div className="border">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="">
                      <span className="size title">Men</span>{" "}
                      <span className="number">(2,258)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="size title">Women</span>{" "}
                      <span className="number">(1.358)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="size title">Children</span>{" "}
                      <span className="number">(1.135)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fil">
              <div className="border">
                <div className="range">
                  <h3>filter by price</h3>
                  <input type="range" />
                </div>
                <div className="size">
                  <h3>size</h3>
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>SMALL (2,319)</span>
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>MEDIUM (1,282)</span>
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span>LARGE (1,392)</span>
                  </label>
                </div>
                <div className="color">
                  <h3>color</h3>
                  <div className="color-items">
                    <a href="">
                      <span className="red"></span>
                      <span>RED (1,392)</span>
                    </a>
                  </div>
                  <div className="color-items">
                    <a href="">
                      <span className="green"></span>
                      <span>GREEN (2,298)</span>
                    </a>
                  </div>
                  <div className="color-items">
                    <a href="">
                      <span className="blue"></span>
                      <span>BLUE (1,075)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products col-lg-9 col-md-8 col-12 ">
            <div className="container">
              <div className="pro-top">
                <h3 className="title">Shop All</h3>
                <div className="buttons">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Latest
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Men</Dropdown.Item>
                      <Dropdown.Item href="#">Women action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Children</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Reference
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Relevance</Dropdown.Item>
                      <Dropdown.Item href="#">Name , A to Z</Dropdown.Item>
                      <Dropdown.Item href="#">Name , Z to A</Dropdown.Item>
                      <Dropdown.Item href="#">Price , Low t High</Dropdown.Item>
                      <Dropdown.Item href="#">Price , High to Low</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="product">
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_1} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Tank Top</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_2} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Polo Shirt</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_3} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>T-Shirt Mockup</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_1} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Tank Top</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_2} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Polo Shirt</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_3} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>T-Shirt Mockup</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_1} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Tank Top</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_2} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Polo Shirt</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_3} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>T-Shirt Mockup</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_2} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Polo Shirt</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_3} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>T-Shirt Mockup</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>
                <div className="pro col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <figure><Link to='/Shop/Pro'><img src={cloth_1} alt="" /></Link></figure>
                    <div className="text">
                      <Link to='/Shop/Pro'><h3>Tank Top</h3></Link>
                      <p className="discribtion">Finding perfect t-shirt</p>
                      <p className="price">50$</p>
                    </div>
                  </div>
                </div>

                <div className="badgs">
                  <div className="badg-num">
                  <ul>
                    <li><Link>&lt;</Link></li>
                    <li class="active"><Link>1</Link></li>
                    <li><Link>2</Link></li>
                    <li><Link>3</Link></li>
                    <li><Link>4</Link></li>
                    <li><Link>5</Link></li>
                    <li><Link>&gt;</Link></li>
                  </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAll;
