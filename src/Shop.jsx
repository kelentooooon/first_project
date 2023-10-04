import React from 'react'
import Navbar from "./Navbar"
import ShopAll from './ShopAll'
import Category from "./Category"
import Footer from "./Footer"
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="url">
        <div className="container">
            <div>
                <h3>
                    <Link to='/'>Shop</Link>
                </h3>
                <span>/</span>
                <h3>
                    About
                </h3>
            </div>
        </div>
      </div>
      
      <ShopAll />

      <Category />
      <Footer />
    </div>
  )
}

export default Shop