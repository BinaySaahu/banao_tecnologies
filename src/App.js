import "./App.css";
import Hero from "./components/heroSection/Hero";
import MobileNav from "./components/navigation/MobileNav";

import cross from "./assets/baseline-cancel-24px.svg";
import Nav from "./components/navigation/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SignUp from "./components/auth/SignUp";
import FeedSection from "./components/feedSection/FeedSection";
import MoboSignup from "./components/auth/MoboSignup";
import Edit from "./components/Edit";

function App() {
  const [viewSignUp, setViewSignup] = useState(false);
  return (
    <div className="d-flex flex-column">
      <MobileNav />
      <Nav />
      <Hero setViewSignup={setViewSignup} viewSignUp={viewSignUp} />
      <FeedSection setViewSignup={setViewSignup} viewSignUp={viewSignUp} />
      {viewSignUp && (
        <div className="login_modal">
          <div className="signup_container w-100 d-flex justify-content-center">
            <SignUp />
            <MoboSignup setViewSignup={setViewSignup} viewSignUp={viewSignUp} />
            <div className="signUp_cancel h-100 px-2">
              <img
                src={cross}
                alt=""
                className="position-relative"
                // style={{ bottom: "38%", left: "5px", cursor: "pointer" }}
                onClick={() => setViewSignup(!viewSignUp)}
              />
            </div>
          </div>
        </div>
      )}
      <Edit/>
    </div>
  );
}

export default App;
