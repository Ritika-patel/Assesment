import React, { useEffect, useState, useContext } from "react";
import "../styles/signup.css";
import GoogleIcn from "../assets/google.png";
import AppleIcn from "../assets/apple.png";
// import AuthContext from "../context/auth/authContext";
// import { useNavigate } from "react-router-dom";
import LoginPage from './LoginPage'
import SignupPage from './SignupPage' 
import {auth, provider} from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signup = () => {

  const [loginPage, setloginPage] = useState(true);

  const handleClick =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
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