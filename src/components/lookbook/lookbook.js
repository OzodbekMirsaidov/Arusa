import React from 'react'
import './lookbook.css'
import shoppingImg from './Rectangle 543 (6).png'

const Lookbook = () => {
    return (
        <section className='lookbook'>

            <div className="lookbook-text">
                <h1>Lookbook</h1>
                <p>The pieces stand out for their contemporary straight lines and imposing presence. Current, following the world trend of the great masters, the furniture stands out for its noble and innovative materials, composing sophisticated and exclusive environments.</p>

            </div>


            <div className="lookbook-title">
            <div className="item">
                <h4>ITEM</h4>
                <h4>DESCRIPTION</h4>
            </div>
            <div className="lookbook-img">

                <img src={shoppingImg} alt="shoppingImg" />
                <div className="lookbook-img-text">
                    <h4>SEE LOOKBOOK</h4>
                    <h4>SHOP ALL</h4>
                </div>
            </div>

            <div className="materials">
                <h4>MATERIALS:</h4>
                <h4>CERAMIC, GLASS, IRON, WOOD</h4>
            </div>

            <div className="materials">
                <h4>PRODUCED IN:</h4>
                <h4>CANADA, ITALY, UNITED STATES</h4>
            </div>

            <div className="materials">
                <h4>CATEGORIES:</h4>
                <h4>DECORATION, LAMP, FURNITURE </h4>
            </div>

            
            </div>




        </section>

    )
} 

export default Lookbook
