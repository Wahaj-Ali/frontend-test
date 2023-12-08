import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {

  const navLinks = [ 
    { name: 'Resources', url: '/'},
    { url: '/', name: 'Provisional Funding Info' },
    { url: '/contact-us', name: 'Contact Us' },
  ].filter(Boolean);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 820);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
    } else {
      document.body.classList.remove('mobile-menu-active');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-active');
  };

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
        <Link to='/'  onClick={closeMobileMenu}><h1 className='logo'>LOGO</h1></Link>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="menu-icon">&#9776;</span>
        </div>
        <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map(({ url, name }) => (
            <li
              key={name}
              className='nav-item'
              onClick={closeMobileMenu} 
            >
              <Link to={url}>{name}</Link>
              {isMobileView && <FaAngleRight />}
            </li>
          ))}
        </ul>
      </div>
      <hr className="gradient-line" />
    </nav>
  )
}

export default Navbar