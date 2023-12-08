import React from 'react'
import Header from '../../Components/Header/Header'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
import ISI from '../../Components/ISI/ISI'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <GetInTouch />
        <ISI />
    </div>
  )
}

export default Home