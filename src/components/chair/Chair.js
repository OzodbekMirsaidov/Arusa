import React from 'react'
import './chair.css'
import chairImg from './Rectangle 556.png'
const Chair = () => {
    return (
        <section className='chair'>
            <div className="chair-text">
                <h1>Native light chair</h1>
                <p>Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, your days as a host will be marked by a lot of elegance and sophistication.</p>
                <h4>VIEW PRODUCT</h4>
            </div>

            <div className="chair-img">
                <img src={chairImg} alt="chairImg" />
            </div>
        </section>
    )
}

export default Chair

