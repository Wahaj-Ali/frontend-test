import React from 'react'
import './Navbar.css'

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
            <h1 className='logo'>LOGO</h1>
            <a href="">Resources</a>
            <a href="">Provisional Funding Info</a>
            <a href="">Contact Us</a>
        </div>
        <hr className="gradient-line" />
    </nav>
  )
}

export default Navbar