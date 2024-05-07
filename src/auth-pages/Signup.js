import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";


const SignUp = () => {
  return (
    <div className="signup-container">
    <div className="overlay"></div>
      <div className="left">

      </div>
      <div className="right">
      <div className="right-container">
        <nav className="horizontal-nav">
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/">Login</Link></li>
          </ul>
        </nav>
        <div className="signup-form">
          <h2>Create an Account</h2>
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
            <p>Already have an account? <Link to="/">Login</Link></p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
