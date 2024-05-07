import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Corrected: useNavigate instead of history

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const hardcodedEmail = "example@gmail.com";
    const hardcodedPassword = "password";

    // Check if entered email and password match hardcoded credentials
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Redirect to the home page
      navigate("/home"); // Corrected: using navigate instead of history.push
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
    <div className="overlay"></div>
    <div className="card">
   
      <div className="left">
      <div className="left-container">
        <nav className="horizontal-nav">
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="forgot-password">
            <p>
              <Link to="/forgotpassword">Forgot your password?</Link>
            </p>
          </div>
          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="right">
      <div className="right-container">
      </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
