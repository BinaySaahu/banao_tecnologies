import React from 'react'
import logo from '../../assets/mainLogo.png'
import search from '../../assets/search_logo.png'
import './MobileNav.css'

function MobileNav() {
  return (
    <div className="justify-content-between px-4 py-2 align-items-center mobileNav_mainDiv position-sticky top-0 left-0 w-100">
        <div className = "w-100 text-start">
            <img src={logo} alt="Comapny logo" className='mainlogo'/>
        </div>
        <div className = "w-100 text-center">
            <div className='px-2 text-end d-flex justify-content-between align-items-center moboNav_search w-100' style={{height:'auto',borderRadius:'21px',backgroundColor:"#F2F2F2"}}>
                <img src={search} alt="" className='h-75 text-start' style={{objectFit:'contain'}}/>
                <input type="text" placeholder='Search for your favorite groups in ATG' className='w-100 border-0 text-center px-2 fw-semibold' style={{backgroundColor:"#F2F2F2"}}/>
            </div>
        </div>
    </div>
  )
}

export default MobileNav
