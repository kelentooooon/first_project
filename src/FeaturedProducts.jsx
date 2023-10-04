import React from 'react'
import "./FeaturedProducts.css"
import tank from './img/cloth_1.jpg'
import corater from './img/cloth_3.jpg'
import polo from './img/cloth_2.jpg'

const FeaturedProducts = () => {
  return (
  <div className="FeaturedProducts">
    <div className="title">
      <h2>Featured Products</h2>
    </div>
      <div className="all-items">
      <div className="items col-lg-3 ">
          <div className="item">
            <figure>
              <img src={tank} alt="" />
            </figure>
            <div className="about">
              <h3><a href="">Tank Top</a></h3>
              <p className='discribion'>Finding perfect t-shirt</p>
              <p className='price'>$50</p>
            </div>
          </div>
        </div>
        <div className="items col-lg-3 ">
          <div className="item">
            <figure>
              <img src={corater} alt="" />
            </figure>
            <div className="about">
              <h3><a href="">Corater</a></h3>
              <p className='discribion'>Finding perfect products</p>
              <p className='price'>$50</p>
            </div>
          </div>
        </div>
        <div className="items col-lg-3 ">
          <div className="item">
            <figure>
              <img src={polo} alt="" />
            </figure>
            <div className="about">
              <h3><a href="">Polo Shirt</a></h3>
              <p className='discribion'>Finding perfect products</p>
              <p className='price'>$50</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default FeaturedProducts