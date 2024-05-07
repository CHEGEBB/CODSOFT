import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Signup.scss";
import Background from "../images/webp/women/Background.mp4";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="overlay"></div>
      <div className="card">
        <div className="left">
          <div className="left-container">
            <nav className="horizontal-nav">
              <ul>
                <li>
                  <NavLink exact to="/signup" activeClassName="active">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Login
                  </NavLink>
                </li>
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
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                </div>
                {/* Submit button */}
                <button type="submit">Sign Up</button>
              </form>
              <div className="login-link">
                <p>
                  Already have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="overlaytwo"></div>
          <div class="welcome-text">
            <h2>Welcome to GlamourGallerie</h2>
            <p>
              Explore our curated collection of haute couture and trendsetting
              ensembles.Step into a world where style meets sophistication, and fashion finds its true expression.
            </p>
          </div>
          <video autoPlay muted loop>
            <source src={Background} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
