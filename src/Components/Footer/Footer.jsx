import React from 'react'
import { Link } from 'react-router-dom'
import seagen from '../../assets/Logo/Seagen Logo.png'
import paab from '../../assets/Logo/PAAB.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-up">
            <Link className='footer-link'>Privacy Policy</Link>
            <Link className='footer-link'>Legal Notice</Link>
        </div>
        <div className="footer-down">
            <div className="footer-logo">
                <div className="logo1">
                    <img src={seagen} alt="Seagen" />
                </div>
                <div className="logo2">
                    <img src={paab} alt="PAAB" />
                </div>
            </div>
            <div className="fDContent">
                <p>This website is intended only for Canadian HCPs</p>
                <p>TUKYSA and its logo are trademarks of Seagen Inc. Seagen and its logo are trademarks of Seagen Inc. used under license by Seagen Canada Inc. All other trademarks are the marks of their respective owners.</p>
                <p>CA-TUP-23-115-MT</p>
            </div>
        </div>
    </div>
  )
}

export default Footer