import React from "react";

import "./Hero.css";

function Hero({setViewSignup,viewSignUp}) {
  return (
    <div
      className="mainDivHeroSection d-flex align-items-end justify-content-end flex-column"
      // style={{backgroundImage:`url(${img})`}}
    >
      <div className="heroSection_Nav justify-content-between px-3 py-3 align-items-center w-100 h-100">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <button className="border border-2 rounded-2 py-2 px-3 joinMobo_btn" onClick={()=>setViewSignup(!viewSignUp)}>
            Join group
          </button>
        </div>
      </div>
      {/* <img src={hero_img} alt="" className='w-100'/> */}
      <div className="w-100 my-5 hero_headings">
        <h1>Computer Engineering</h1>
        <h6>142,765 Computer Engineers follow this</h6>
      </div>
    </div>
  );
}

export default Hero;
