import React from 'react'
import Banner from './Banner'
import './home.css'
import Slide from './Slide';

const Maincomp = () => {
  return (
    <div className='home_section'>
    <div className='banner_part'>

     <Banner />
     <Slide />
    </div>
    </div>
  )
}

export default Maincomp