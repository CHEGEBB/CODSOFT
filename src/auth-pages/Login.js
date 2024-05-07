import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require("../images/webp/men/q1.jpg"),
    require("../images/webp/shirt2.webp"),
    require("../images/webp/a6.webp"),
    require("../images/webp/a5.webp")
  ];
  const messages = [
    "Our T-Shirts are made from the finest cotton in the world. They are soft, comfortable, and durable. They are available in a variety of colors and sizes.",
    "We sell high-class suits that are made from the finest materials. They are available in a variety of colors and sizes.",
    "Our shoes are made from the finest leather in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleLogin = (e) => {
    e.preventDefault();
    const hardcodedEmail = "example@gmail.com";
    const hardcodedPassword = "password";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      navigate("/home");
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
            <img src={images[currentImageIndex]} alt="Product" className="product-image" />
            <p className="product-description">{messages[currentImageIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
