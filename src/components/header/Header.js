import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className="container">

        <header>
            <div className="logo">
                <i class="fa-solid fa-bars"></i>
                <h4>SHOP</h4>
            </div>

            <h1>ARUSA</h1>

            <div className="bag">
                <h4>BAG</h4>
                <h1>O</h1>
            </div>
        </header>


        <section className='home'>
            <h1>Seamless furniture
                with natural fabrics
                </h1>
                <button>SHOP ALL</button>
        </section>
        </div>
    )
}

export default Header
