import React from "react";
import "./How.css";
import img from "./img/blog_1.jpg";

const How = () => {
  return (
    <div className="how">
      <div className="container">
        <div className="row">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="info">
            <h3>How We Started</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              explicabo consectetur dolor cupiditate quisquam eum quia!
              Similique quae quibusdam a placeat inventore ex quas odio porro
              dolores, provident atque, deserunt necessitatibus? Molestiae
              officiis tenetur vel dolores, vitae quisquam aliquid beatae
              commodi eius obcaecati error quo quam accusamus distinctio amet
              aliquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
