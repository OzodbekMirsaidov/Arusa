import React from 'react'
import './category.css'
import categoryImg from './Rectangle 549.png'
import categoryImg1 from './Rectangle 550.png'
import categoryImg2 from './Rectangle 551.png'
import categoryImg3 from './Rectangle 548.png'
import bacgroundImg from './Rectangle 548.png'

const Category = () => {
  return (
    <section className='category'>
        
        <div className="category-title">
            <h1>Every detail matter</h1>
            <span>WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY ENVIRONMENT.</span>
            <p>There are multiples of high quality pieces, with styles that transition from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings and many gifts to compose great projects. In order selection, a mix of basic style, stricter customization and more compact dimensions, composing sophisticated and exclusive environments.</p>
        </div>

        <div className="category-imgs">
            <img src={categoryImg} alt="categoryImg" />
            <div className="category-img">
            <img src={categoryImg1} alt="categoryImg1" />
            <img src={categoryImg2} alt="categoryImg2" />
            </div>
        </div>

        <div className="bacground-img">
            <img src={bacgroundImg} alt="bacgroundImg" />
        </div>
    
      </section>
  )
}

export default Category
