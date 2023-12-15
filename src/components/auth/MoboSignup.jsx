import React, { useState } from "react";
import psswrd from "../../assets/icon/action/visibility_24px_outlined.svg";
import fb from "../../assets/f_logo_RGB-Blue_1024.png";
import google from "../../assets/search.png";
import "./MoboSignup.css";

const MoboSignup = ({setViewSignup,viewSignUp}) => {
  const [view, setView] = useState(false);
  const [showLogin, setLogin] = useState(false);
  const [user,setUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    confirm_password:""

  })
  const handleSubmit = ()=>{
      const o = JSON.stringify(user)
      localStorage.setItem('user',o)
      window.location.reload()
  }

  const dataInp = (e)=>{
    const name = e.target.name;
    const value = e.target.value
    setUser({...user,[name]:value})

  }
  return (
    <div className="msignup_mainDiv py-3 px-4">
      <div className="signup_createAccnt d-flex justify-content-between my-3">
        <p className="singup_create my-0">
          {showLogin ? "Welcome back!" : "Create account"}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={()=>setViewSignup(!viewSignUp)}
        >
          <g clip-path="url(#clip0_1_597)">
            <path
              d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"
              fill="#212529"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_597">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div>
        <div className="signup_inputs d-flex flex-column justify-content-center align-items-center w-100">
          {!showLogin && (
            <div className="d-flex w-100 signup_input_containers">
              <input
                type="text"
                className="w-100"
                placeholder="First name"
                style={{ border: "1px solid #D9D9DB" }}
                name="first_name"
              />
              <input type="text" className="w-100" placeholder="Last name" name="last_name"/>
            </div>
          )}
          <div className="w-100 signup_input_containers">
            <input type="email" className="w-100" placeholder="Email"  onChange={dataInp} name="email"/>
          </div>
          <div className="w-100 d-flex signup_input_containers">
            <input
              type={view ? "text" : "password"}
              name="password"
              id=""
              className="w-100"
              placeholder="Password" onChange={dataInp}
            />
            <button className="px-1" onClick={() => setView(!view)}>
              <img src={psswrd} alt="" />
            </button>
          </div>
          {!showLogin && (
            <div className="w-100 signup_input_containers">
              <input
                type="password"
                name="confirm_password"
                id=""
                className="w-100"
                placeholder="Confirm password"
              />
            </div>
          )}
          <div className="d-flex justify-content-between w-100 my-1">
            <button className="createAccnt_btn w-50" onClick={handleSubmit}>
              {showLogin ? "Sign in" : "Create Account"}
            </button>
            <p className="w-50 text-end my-0 d-flex align-items-center justify-content-end" onClick={()=>setLogin(!showLogin)} style={{textDecoration:'underline'}}>
              {showLogin?"or,Create account":"or,Sign in"}
            </p>
          </div>
          <button className="createAccnt_btn_fb my-1">
            <img src={fb} alt="" />
            Sign up with facebook
          </button>
          <button className="createAccnt_btn_google my-1">
            <img src={google} alt="" />
            Sign up with google
          </button>
          {!showLogin && <p
            className="text-center my-1"
            style={{ fontSize: "11px", color: "#212529" }}
          >
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>}
          {showLogin && <p className="my-2" style={{fontSize:'13px'}}>Forgot password?</p>}
        </div>
      </div>
    </div>
  );
};

export default MoboSignup;
