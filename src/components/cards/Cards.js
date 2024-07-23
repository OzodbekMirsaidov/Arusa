import React from 'react'
import './cards.css'
import CardImg from './Rectangle 554.png'
import CardImg1 from './Rectangle 554 (1).png'
import CardImg2 from './Rectangle 554 (2).png'
const Cards = () => {
    return (
        <section className='cards'>

            <div className="card">
                <img src={CardImg} alt="CardImg" />
                <h2>Inside a playful, bohemian beach house on Martha's Vineyard</h2>
                <p>I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.</p>
                <h4>READ ARTICLE</h4>
            </div>

            <div className="card">
                <img src={CardImg1} alt="CardImg1" />
                <h2>Modern Texas home is beautiful and completely kid-friendly</h2>
                <p>I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.</p>
                <h4>READ ARTICLE</h4>
            </div>

            <div className="card">
                <img src={CardImg2} alt="CardImg2" />
                <h2>Tudor-style home in Chicago's North Shore is chock-full</h2>
                <p>I would follow Jessica to the end of the Earth,” Johanna Hynes says, referring to her designer, Jessica Stambaugh. The Nashville-based principal of JS Interiors designed Hynes’ Boston wellness studio, Asana Charlestown, her family’s townhouse—and most recently, their beach chalet in Katama on Martha’s Vineyard.</p>
                <h4>READ ARTICLE</h4>
            </div>




        </section>
    )
}

export default Cards
