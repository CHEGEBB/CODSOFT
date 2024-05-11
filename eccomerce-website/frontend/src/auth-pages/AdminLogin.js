import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminLogin.scss";

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@admin.com"); // Hardcoded admin email
  const [password, setPassword] = useState("admin"); // Hardcoded admin password
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem('adminToken', token); // Store the admin token in local storage
        navigate('/'); // Redirect to the homepage
      } else {
        alert('Invalid email or password'); // Handle invalid credentials
      }
    } catch (error) {
      console.error('Admin login failed:', error.message);
      alert('Admin login failed. Please try again later.'); // Handle other errors
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>
          Go back to <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
