import React from 'react'
import './footer.css'
import footerImg from './Union.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">

    <footer>
      <div className="footer-text">
        <Link>STORE</Link>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Journal</Link>
      </div>

      <div className="footer-text">
        <Link>SHOP</Link>
        <Link>All</Link>
        <Link>Lookbook</Link>
        <Link>Collections</Link>
        <Link>Featured</Link>
      </div>

      <div className="footer-text">
        <Link>COLLECTIONS</Link>
        <Link>Decors</Link>
        <Link>Furnitures</Link>
        <Link>Ceramic</Link>
        <Link>Lamps</Link>
      </div>

      <div className="footer-text">
        <Link>HELP</Link>
        <Link>Contact</Link>
        <Link>Login & Account</Link>
        <Link>Privacy Policy</Link>
        <Link>Refund Policy</Link>
      </div>

    </footer>

    <div className="footer-img">
        <img src={footerImg} alt="footerImg" />
    </div>

    <div className="footer-title">
        <p></p>
        <h4>© ARUSA 2022 | AGATHA SAKOWICZ</h4>
        <p></p>
    </div>
    </div>
  )
}

export default Footer
