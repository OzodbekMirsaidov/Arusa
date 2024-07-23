import React from 'react'
import './shopping.css'
import shoppingCard from './Rectangle 543 (7).png';
import shoppingCard1 from './Rectangle 543 (8).png';
import shoppingCard2 from './Rectangle 543 (9).png';
import shoppingCard3 from './Rectangle 543 (15).png';
import shoppingCard4 from './Rectangle 543 (10).png';
import shoppingCard5 from './Rectangle 543 (11).png';
import shoppingCard6 from './Rectangle 543 (13).png';
import shoppingCard7 from './Rectangle 543 (14).png';


const Shopping = () => {
  return (
    <section className='shopping'>
      
      <div className="shopping-title">
        <p></p>
        <h1>Enjoy our feature products</h1>
        <p></p> 
      </div>

      <div className="shopping-cards">

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard} alt="" />   
                </div>

                <div className="shopping-card-text">
                <h4>NATIVE IRON CHAIR</h4>   
                <h4>$4,990</h4>  
                </div>

            </div>

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard1} alt="" />   
                </div>

                <div className="shopping-card-text">
                <h4>CENTURY DASHE</h4>   
                <h4>$1,799</h4>  
                </div>

            </div>

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard2} alt="" />   
                </div>

                <div className="shopping-card-text">
                <h4>NATIVE IRON CHAIR</h4>   
                <h4>$4,990</h4>  
                </div>

            </div>

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard3} alt="" />   
                </div>

                <div className="shopping-card-text">
                <h4>PAOLA WOOD LAMP</h4>   
                <h4>$5,990</h4>  
                </div>

            </div>

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard4} alt="" />   
                </div>

                <div className="shopping-card-text">
                <h4>NATIVE IRON CHAIR</h4>   
                <h4>$4,990</h4>  
                </div>

            </div>

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard5} alt="" />   
                </div>

                <div className="shopping-card-text">
                <h4>CENTURY DASHE   </h4>   
                <h4>$1,799</h4>  
                </div>

            </div>

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard6} alt="" />   
                </div>

                <div className="shopping-card-text">
                    <h4>NATIVE IRON CHAIR</h4>      
                <h4>$4,990</h4>  
                </div>

            </div>

            <div className="shopping-card">
                <div className="shopping-card-img">
                <img src={shoppingCard7} alt="" />   
                </div>

                <div className="shopping-card-text">
                <h4>PAOLA WOOD LAMP</h4>   
                <h4>$5,990</h4>  
                </div>

            </div>

     




      </div>


      <div className="shopping-title">
        <p></p>
        <h4>Shop all</h4>
        <p></p> 
      </div>




    </section>
  )
}

export default Shopping
