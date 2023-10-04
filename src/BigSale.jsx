import React from 'react'
import "./BigSale.css"
import sale from "./img/blog_1.jpg"

const BigSale = () => {
  return (
    <div className="BigSale">
        <div className="title">
            <h2>Big Sale!</h2>
        </div>
        <div className="row">
            <div className="image col-lg-6 col-md-10">
                <a href="">
                    <img src={sale} alt="sale" />
                </a>
            </div>
            <div className="info col-lg-5 col-md-12">
                <h3>50% less in all items</h3>
                <p className='by'>By<a href="">Carl Smith</a>• September 3, 2018</p>
                <p className='discribtion'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                <a href=""><input type="text" className='btn' value="Shop Now" /></a>
            </div>
        </div>
    </div>
  )
}

export default BigSale