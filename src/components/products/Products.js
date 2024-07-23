import React from 'react'
import './products.css'
import productsCardimg1 from "./Rectangle 543.png"
import productsCardimg2 from "./Rectangle 543 (1).png"
import productsCardimg3 from "./Rectangle 543 (2).png"
import productsCardimg4 from "./Rectangle 543 (3).png"


const Products = () => {
    return (
        <section className='products'>

            <div className="products-title">
                <p></p>
                <h1>Enjoy our feature products</h1>
                <p></p>
            </div>


            <div className="products-cards">

                <div className="products-card">
                    <img src={productsCardimg1} alt="productsCardimg1" />
                    <div className="products-card-text">
                        <p>NATIVE IRON CHAIR</p>
                        <p>$4,990</p>
                    </div>
                </div>

                <div className="products-card">
                    <img src={productsCardimg2} alt="productsCardimg2" />
                    <div className="products-card-text">
                        <p>NATIVE IRON CHAIR</p>
                        <p>$1,799</p>
                    </div>
                </div>
                
                <div className="products-card">
                    <img src={productsCardimg3} alt="productsCardimg3" />
                    <div className="products-card-text">
                        <p>NATIVE LIGHT CHAIR</p>
                        <p>$4,990</p>
                    </div>
                </div>

                <div className="products-card">
                    <img src={productsCardimg4} alt="productsCardimg4" />
                    <div className="products-card-text">
                        <p>PAOLA WOOD LAMP</p>
                        <p>$$5,990</p>
                    </div>
                </div>


            </div>

            <div className="products-title-shop">
                <p></p>
                <span>Shop all</span>
                <p></p>
            </div>


        </section>
    )
}

export default Products
