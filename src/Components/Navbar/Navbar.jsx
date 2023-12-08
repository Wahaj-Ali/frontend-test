import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-top">
        <div className="nav-top-links">
          <p>For Canadian Health Professioanls</p>
          <p>Safety Information</p>
          <p>Product Monograph</p>
          <p>English/Français</p>
        </div>
      </div>
      <div className="nav-down">
        <Link to='/'><h1 className='logo'>LOGO</h1></Link>
        <a className='nav-link' href="">Resources</a>
        <a className='nav-link' href="">Provisional Funding Info</a>
        <a className='nav-link' href="">Contact Us</a>
      </div>
      <hr className="gradient-line" />
    </nav>
  )
}

export default Navbar