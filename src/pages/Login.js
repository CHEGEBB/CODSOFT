import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-container">
        {/* Add your image or animation here */}
      </div>
      <div className="right-container">
        <nav className="horizontal-nav">
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div className="login-form">
          <h2>Login</h2>
          {/* Your login form */}
          <form>
            {/* Form fields */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            {/* Submit button */}
            <button type="submit">Login</button>
          </form>
          <div className="forgot-password">
            <p><Link to="/forgotpassword">Forgot your password?</Link></p>
          </div>
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
