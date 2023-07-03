import React, { useEffect, useState, useContext } from "react";
import "../styles/signup.css";
import GoogleIcn from "../assets/google.png";
import AppleIcn from "../assets/apple.png";
import LoginPage from './LoginPage'
import SignupPage from './SignupPage' 
import {auth, provider} from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signup = () => {

  const [loginPage, setloginPage] = useState(true);


  const handleClick =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }


  return (
    <div className="signup">
      <div className="left_side center">
        <p>Board.</p>
      </div>

      <div className="center right_side">
        <div>
          <div>
            <div className="options">
              <div>
                <button onClick={handleClick} className="tag">
                  <img src={GoogleIcn} />
                  Sign in with Google
                </button>
              </div>

              <div>
                <button className="tag">
                  <img src={AppleIcn} />
                  Sign in with Apple
                </button>
              </div>
            </div>
          </div>

          <div className="fillform">
            <div className="container center">
            {!loginPage ? (
        <SignupPage />
      ) : (
        <LoginPage />
      )}
            </div>
          </div>

          <div className="statement center">
          {
  loginPage ? (
    <p>
      Don’t have an account? <a onClick={()=>setloginPage(false)} >Register here</a>
    </p>
  ) : (
    <p>
      Already have an account? <a onClick={()=>setloginPage(true)} >Login here</a>
    </p>
  )
}


          </div>
        </div>
      </div>
    </div>
  );
};


export default Signup