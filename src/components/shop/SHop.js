import React from 'react'
import './shop.css'
import shopImg from "./Rectangle 543 (4).png"
import shopImg1 from "./Rectangle 543 (5).png"

const SHop = () => {
    return (
        <section className='shop'>

            <div className="shop-card">
                <img src={shopImg} alt="shopImg" />
                <div className="shop-card-text">
                    <p>IGLENIX VASE</p>
                    <p>$2,299</p>
                </div>
            </div>

            <div className="shop-card1">
                <img src={shopImg1} alt="shopImg1" />
                <div className="shop-card1-text">
                    <p>ATAJUX LAMP</p>
                    <p>$2,399</p>
                </div>
            </div>

        </section>
    )
}

export default SHop
