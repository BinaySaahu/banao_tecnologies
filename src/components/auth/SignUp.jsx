import React, { useState } from "react";
import "./SignUp.css";
import img from "../../assets/atg_illustration.png";
import psswrd from "../../assets/icon/action/visibility_24px_outlined.svg";
import fb from "../../assets/f_logo_RGB-Blue_1024.png";
import google from "../../assets/search.png";

const SignUp = () => {
  const [view, setView] = useState(false);
  const [showLogin,setLogin] = useState(false)
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
  console.log(user)
  return (
    <div className="login_mainDiv">
      <div className="login_top">
        <p className="login_top_text">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
      </div>
      <div className="d-flex justify-content-between px-3 py-2">
        <div className="signup_createAccnt">
          <p className="singup_create my-0">{showLogin?"Sign in":"Create account"}</p>
        </div>
        <div className="d-flex align-items-center">
          <p
            className="my-0 signup_already_have"
            style={{ fontWeight: "400", color: "black" }}
          >
            {showLogin?"Dont't have an account? ":"Already have an account? "}
            {showLogin?<span style={{ color: "#2F6CE5", cursor:'pointer' }} onClick={()=>setLogin(false)}>Create new for free!</span>:<span style={{ color: "#2F6CE5", cursor:'pointer' }} onClick={()=> setLogin(true)}>Sign In</span>}
          </p>
        </div>
      </div>
      <div className="d-flex px-3 py-3">
        <div className="signup_inputs d-flex flex-column justify-content-center align-items-center w-50">
          {!showLogin && <div className="d-flex w-100 signup_input_containers">
            <input
              type="text"
              name="first_name"
              className="w-100"
              placeholder="First name"
              style={{ border: "1px solid #D9D9DB" }}
               onChange={dataInp}
            />
            <input type="text" className="w-100" placeholder="Last name" name="last_name"  onChange={dataInp}/>
          </div>}
          <div className="w-100 signup_input_containers">
            <input type="email" className="w-100" placeholder="Email" name="email" onChange={dataInp}/>
          </div>
          <div className="w-100 d-flex signup_input_containers">
            <input
              type={view ? "text" : "password"}
              name="password"
              id=""
              className="w-100"
              placeholder="Password"
              onChange={dataInp}
            />
            <button className="px-1" onClick={() => setView(!view)}>
              <img src={psswrd} alt="" />
            </button>
          </div>
          {!showLogin&&<div className="w-100 signup_input_containers">
            <input
              type="password"
              name="confirm_password"
              id=""
              className="w-100"
              placeholder="Confirm password"
              onChange={dataInp}
            />
          </div>}
          <button className="createAccnt_btn" onClick={handleSubmit}>{showLogin?"Sign in":"Create Account"}</button>
          <button className="createAccnt_btn_fb">
            <img src={fb} alt="" />
            Sign up with facebook
          </button>
          <button className="createAccnt_btn_google">
            <img src={google} alt="" />
            Sign up with google
          </button>
          {showLogin&&<p className="my-2">Forgot password?</p>}
        </div>
        <div className="signup_image w-50">
          <img src={img} alt="" className="w-100"/>
          <p style={{fontSize:'11px',fontWeight:'400'}} className="px-3 text-center">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
