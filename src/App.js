import React from "react";
import { BrowserRouter, Router, Route, Routes, Link,  NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


// componant
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Pro from "./Pro";
import Cart from "./Cart"
import CheckOut from "./CheckOut"
import Thanks from "./thanks"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop/Pro" element={<Pro />} />
        <Route path="/Shop/Pro/Cart" element={<Cart />} />
        <Route path="/Shop/Pro/Cart/CheckOut" element={<CheckOut />} />
        <Route path="/Shop/Pro/Cart/CheckOut/Thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
