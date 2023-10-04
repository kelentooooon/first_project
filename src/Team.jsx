import React from "react";
import "./Team.css";
import img1 from "./img/person_1.jpg";
import img2 from "./img/person_2.jpg";
import img3 from "./img/person_3.jpg";
import img4 from "./img/person_4.jpg";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="title">
          <h2>The Team</h2>
        </div>
        <div className="AllCard">
          <div className="card col-lg-3 col-md-6 col-12">
            <img src={img1} alt="" />
            <div className="about">
              <h3>Elizabeth Graham</h3>
              <p className="job">CEO/CO-FOUNDER</p>
              <p className="discribtion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.
              </p>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-12">
            <img src={img2} alt="" />
            <div className="about">
              <h3>Jennifer Greive</h3>
              <p className="job">CO-FOUNDER</p>
              <p className="discribtion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.
              </p>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-12">
            <img src={img3} alt="" />
            <div className="about">
              <h3>Patrick Marx</h3>
              <p className="job">MARKETING</p>
              <p className="discribtion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.
              </p>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-12">
            <img src={img4} alt="" />
            <div className="about">
              <h3>Mike Coolbert</h3>
              <p className="job">SALES MANAGER</p>
              <p className="discribtion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aut minima nihil sit distinctio recusandae doloribus ut fugit
                officia voluptate soluta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
