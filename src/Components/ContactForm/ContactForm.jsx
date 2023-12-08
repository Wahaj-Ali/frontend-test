import React, { useEffect, useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    // const [submitted, setSubmitted] = useState(false);

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const formattedInput = input.replace(/\D/g, '');
        setPhoneNumber(formattedInput);
    };

    return (
        <div className='contact-form'>
            <h2>Contact Us</h2>
            <form action="submit" className="contactPageForm" >
                <label htmlFor="" className='contactFormLabel'>Name <span className='red'> *</span></label>
                <input className='cFContent' name="name" type="text" placeholder='Enter your name' required />
                <label htmlFor="" className='contactFormLabel'>Email<span className='red'> *</span></label>
                <input className='cFContent' name="email" type="email" placeholder='Enter your email' required />
                <>
                    <label htmlFor="" className='contactFormLabel'>Phone Number<span className='red'> *</span></label>
                    <input
                        className='cFContent'
                        name='phone'
                        type="text"
                        placeholder="Share your contact number."
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                    />
                </>
                <label htmlFor="" className='contactFormLabel'>Message</label>
                <textarea className='cFContent' name="message" id="" cols="30" rows="10" placeholder='Your message...' required></textarea>
                <button className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm