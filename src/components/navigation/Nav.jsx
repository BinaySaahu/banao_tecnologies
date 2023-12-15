import React from 'react'
import logo from '../../assets/mainLogo.png'
import search from '../../assets/search_logo.png'
import dropDown from '../../assets/baseline-arrow_drop_down-24px.png'
import './Nav.css'


function Nav() {
  return (
    <div className="justify-content-between px-4 py-2 align-items-center nav_mainDiv">
        <div className = "w-100 text-start">
            <img src={logo} alt="Comapny logo" />
        </div>
        <div className = "w-100 text-center">
            <div type='text' className='px-2 text-end d-flex justify-content-between align-items-center' placeholder='Search for your favorite groups in ATG' style={{width:'360px', height:'42px',borderRadius:'21px',backgroundColor:"#F2F2F2"}}>
                <img src={search} alt="" className='h-75 text-start' style={{objectFit:'contain'}}/>
                <input type="text" placeholder='Search for your favorite groups in ATG' className='w-100 border-0 text-center px-2 fw-semibold' style={{backgroundColor:"#F2F2F2"}}/>

            </div>
        </div>
        <div className = "w-100 text-end d-flex align-items-center justify-content-end my-0">
            <p className='d-flex align-items-center my-0'>Create a account <span className='text-primary fw-semibold'>&nbsp;It's free!</span> <img src={dropDown} alt="" /></p>
        </div>
      
    </div>
  )
}

export default Nav
