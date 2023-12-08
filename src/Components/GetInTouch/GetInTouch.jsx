import React from 'react'
import book from '../../assets/Icons/Book Copy.png'
import map from '../../assets/Icons/Map.png'
import mail from '../../assets/Icons/Envelope.png'
import { FaAngleRight } from "react-icons/fa6";
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <div className='get-in-touch'>
            <div className="useful-links">
                <div className="link">
                    <div className="link-img">
                        <img src={book} alt="" />
                    </div>
                    <div className="link-desc">
                        <h3>Resources</h3>
                        <p>Access informative  resources for you  and your patients</p>
                    </div>
                    <button>Learn More<FaAngleRight /></button>
                </div>

                <div className="link">
                    <div className="link-img">
                        <img src={map} alt="" />
                    </div>
                    <div className="link-desc">
                        <h3>Resources</h3>
                        <p>Access informative  resources for you  and your patients</p>
                    </div>
                    <button>Learn More<FaAngleRight /></button>
                </div>

                <div className="link">
                    <div className="link-img">
                        <img src={mail} alt="" />
                    </div>
                    <div className="link-desc">
                        <h3>Resources</h3>
                        <p>Access informative  resources for you  and your patients</p>
                    </div>
                    <button>Get in Touch<FaAngleRight /></button>
                </div>
            </div>
            <div className="note-text">
                <p>*The HER2CLIMB trial studied patients who had received prior trastuzumab, pertuzumab, and T-DM1 in the neoadjuvant, adjuvant, or metastatic setting
                    HER = human epidermal growth factor receptor; MBC = metastatic breast cancer; T-DM1 = trastuzumab emtansine.</p>
            </div>
        </div>
    )
}

export default GetInTouch