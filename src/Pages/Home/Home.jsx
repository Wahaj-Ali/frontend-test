import React from 'react'
import Header from '../../Components/Header/Header'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
import ISI from '../../Components/ISI/ISI'
import CookieDisclaimer from '../../Components/CookieDisclaimer/CookieDisclaimer'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <GetInTouch />
        <ISI />
        <CookieDisclaimer />
    </div>
  )
}

export default Home