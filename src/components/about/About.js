import React from 'react'
import './about.css'
import aboutImg1 from "./Rectangle 541.png"
import aboutImg2 from "./Rectangle 540.png"
import aboutImg3 from "./Rectangle 537.png"
import aboutImg4 from "./Rectangle 538.png"
import aboutImg5 from "./Rectangle 539.png"
import aboutImg6 from "./Rectangle 542.png"
const About = () => {
    return (
        
        <section className='about'>

                <img src={aboutImg1} alt="aboutImg1" />
                <img src={aboutImg2} alt="aboutImg2" />
                <img src={aboutImg3} alt="aboutImg3" />
                <img src={aboutImg4} alt="aboutImg4" />
                <img src={aboutImg5} alt="aboutImg5" />
                <img src={aboutImg6} alt="aboutImg6" />
             
            <div className="about-text">
                <h1>Creating perfect
                    lines and imposing
                    presence</h1>
                <p>Developed the concept of exclusivity, a Arusa features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
                <button>READ ABOUT US</button>
            </div>
        </section>
    )
}

export default About

