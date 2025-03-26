import React from 'react'
import redImg from "../assetss/redimg.png"



function Navbar() {
  return (
    <div className="navbar flex fixed top-0 z-50 py-3  backdrop-blur-lg bg-opacity-20">
       
        <img className='h-13' src={redImg} alt="YouTube Button" />     
        <h1 className=' logoname text-3xl text-white  ' >YouScrape</h1>
    </div>
  )
}

export default Navbar
