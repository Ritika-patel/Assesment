import React, { useEffect, useState, useContext } from "react";
import "../styles/signup.css";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const LoginPage = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email === "" || values.password === "") {
      return;
    }
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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

export default LoginPage;
