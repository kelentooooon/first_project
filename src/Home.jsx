import React from "react";
import Navbar from "./Navbar";
import Post from "./Post"
import Features from "./Features"
import Category from "./Category"
import FeaturedProducts from "./FeaturedProducts"
import BigSale from "./BigSale"
import Footer from "./Footer"

const home = () => {
  return (
    <div>
      <Navbar />
      <Post />
      <Features />
      <Category />
      <FeaturedProducts />
      <BigSale />
      <Footer />
    </div>
  );
};

export default home;
