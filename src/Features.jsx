import React from "react";
import "./Features.css";
import { FaTruck } from "react-icons/fa6";

import { BiSolidHelpCircle , BiRefresh} from "react-icons/bi";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
            <div className="row">
                <div className="feature col-lg-4">
                        <span><FaTruck /></span>
                        <div className="text">          
                            <h3>Free Shipping</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                at iaculis quam. Integer accumsan tincidunt fringilla.
                            </p>
                        </div>
                </div>
                <div className="feature col-lg-4">
                        <span><BiRefresh /></span>
                            <div className="text">          
                                <h3>Free Returns</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                    at iaculis quam. Integer accumsan tincidunt fringilla.
                                </p>
                            </div>
                </div>
                <div className="feature col-lg-4">
                        <span><BiSolidHelpCircle /></span>
                            <div className="text">          
                                <h3>Customer Support</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                    at iaculis quam. Integer accumsan tincidunt fringilla.
                                </p>
                            </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Features;
