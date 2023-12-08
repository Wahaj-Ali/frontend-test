import React, { useState } from 'react'
import './CookieDisclaimer.css'

const CookieDisclaimer = () => {
    const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(true);

    const hideDisclaimer = () => {
        setIsDisclaimerVisible(false);
        // You can also set a cookie here to remember the user's preference.
    };

    if (!isDisclaimerVisible) {
        return null;
    }

    return (
        <div className="cookie-disclaimer">
            <div className="cookie-left">
                <h2>Cookie Disclaimer</h2>
                <p>Cookies on this site help enhance user experience, measure website performance, and improve our delivery of relevant ads and messaging. Submit your consent preference to 'Accept All Cookies', 'Reject All Cookies', or 'Customize Cookie Selection' to manage your preferences. You can update them anytime you revisit the site. <span>Cookie Policy</span> <span>Privacy Policy</span></p>

            </div>
            <div className="cookie-right">
                <button id='cookie-setting'>Cookie Settings</button>
                <button onClick={hideDisclaimer} className='accept-btn'>Reject All</button>
                <button onClick={hideDisclaimer} className='accept-btn'>Accept All Cookies</button>
            </div>
        </div>
    );
}

export default CookieDisclaimer