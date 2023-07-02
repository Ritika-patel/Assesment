import React, { useState, useRef, useContext } from "react";
import AuthContext from "./authContext";
import { googleLogout, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode'



const AuthState = (props) => {

    // const [ user, setUser ] = useState([]);
    // const [ profile, setProfile ] = useState([]);
  
    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
    // };

    return (
        <AuthContext.Provider value={{   }}>
          {props.children}
        </AuthContext.Provider>
      );
}

export default AuthState;
