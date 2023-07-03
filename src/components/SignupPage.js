import React, { useEffect, useState, useContext } from "react";
import "../styles/signup.css";
import {
  createUserWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "../firebase";

const SignupPage = () => {
  const [values, setValues] = useState({ email: "", password: "", name: "" });
  const [errorMsg, setErrorMsg] = useState("")

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email === "" || values.password === "" || values.name === "") {
      return;
    }
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        setErrorMsg("")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
        // ..
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Error">{errorMsg}</div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={values.name}
          onChange={onChange}
          className="forminput"
          type="name"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input
          value={values.email}
          onChange={onChange}
          className="forminput"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          value={values.password}
          onChange={onChange}
          className="forminput"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>

      <div className="forgot">
        <a href="#">Forgot password?</a>
      </div>

      <div>
        <button
          type="submit"
          name="submit"
          value="Submit"
          className="formbutton"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignupPage;
