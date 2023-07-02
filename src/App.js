import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashboardPage';
import Signup from './components/Signup';
import AuthState from './context/auth/AuthState';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


function App() {
const [authenticated, setAuthenticated] = useState('false')
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false)
      }
    });
  }, []);

  return (
    <AuthState>
      <Router>
        <Routes>
          <Route path="/" element={!authenticated? <Signup />: <Dashboard/>} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </AuthState>
  );
}

export default App;
