import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="container">
        <div className="all-info">
        <div className="info">
          <h2>Finding Your Perfect Shoes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
          <a href=""><input type="text" value='Shop Now' className="btn" /></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
