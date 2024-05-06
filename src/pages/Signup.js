import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signup-container">
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
        <div className="signup-form">
          <h2>Create an Account</h2>
          {/* Your sign-up form */}
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" />
            </div>
            {/* Submit button */}
            <button type="submit">Sign Up</button>
          </form>
          <div className="login-link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
