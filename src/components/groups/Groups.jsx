import React, { useState } from 'react'
import './Groups.css'
import grpImg from '../../assets/Rectangle 6.png'

const Groups = () => {
    const [follow,setFollow] = useState(false)
  return (
    <div className='d-flex justify-content-between my-2'>
        <div className='d-flex justiy-content-between align-items-center'>
            <img src={grpImg} alt="" />
            <p className='my-0 mx-3'>Leisure</p>
        </div>
        <button className='follow_btn px-4 py-1' onClick={()=>setFollow(!follow)} style={{backgroundColor:follow?"black":"#EDEEF0",color:follow?"white":"black"}}>{follow?"Following":"Follow"}</button>
    </div>
  )
}

export default Groups
