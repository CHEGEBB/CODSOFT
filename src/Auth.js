// Auth.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./auth-pages/Signup";
import Login from "./auth-pages/Login";

const Auth = () => {
  // Function to authenticate user
  const authenticateUser = (usernameOrEmail, password) => {
    // Hardcoded credentials
    const hardcodedUsername = "admin";
    const hardcodedPassword = "password";

    // Check if provided credentials match hardcoded credentials
    if (usernameOrEmail === hardcodedUsername && password === hardcodedPassword) {
      // Authentication successful
      localStorage.setItem("token", "dummy-token"); // Example: Set token in localStorage
      return true;
    } else {
      // Authentication failed
      return false;
    }
  };

  return (
    <Router>
      <Routes>
        {/* Route for Login (set as the first route) */}
        <Route path="/login" element={<Login authenticateUser={authenticateUser} />} />
        {/* Route for Signup */}
        <Route path="/signup" element={<SignUp />} />
        {/* Route for Home page (protected route) */}
        <Route
          path="/"
          element={<Navigate to="/login" />} // Redirect to login page if not authenticated
        />
      </Routes>
    </Router>
  );
};

export default Auth;
