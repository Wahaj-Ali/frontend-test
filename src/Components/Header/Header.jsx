import React from 'react'
import woman from '../../assets/Images/Woman.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-img">
        <img src={woman} alt="woman" />
      </div>

      <div className="header-content">
        <h3>When HER2+ MBC progresses*</h3>
        <h2>Explore</h2>
        <p>TUKYSA (tucatinib) is indicated in combination with trastuzumab and capecitabine for treatment of patients with locally advanced unresectable or metastatic HER2-positive breast cancer, including patients with brain metastases, who have received prior treatment with trastuzumab, pertuzumab, and trastuzumab emtansine, separately or in combination. Clinical trial data supporting the effectiveness of TUKYSA in combination with trastuzumab and capecitabine are limited to patients who had received at least one prior HER2-directed therapy in the metastatic setting.</p>
      </div>
    </div>
  )
}

export default Header