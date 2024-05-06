// Login.js
import React, { useState } from 'react';
import './Login.scss';
import bg from '../images/webp/kids/bg1.mp4';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-container">
            <video autoPlay loop muted className="background-video">
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <nav className="login-nav">
                    <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
                    <span className="nav-dash">-</span>
                    <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Sign Up</button>
                </nav>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                {isLogin ? (
                    <LoginForm />
                ) : (
                    <SignUpForm />
                )}
            </div>
        </div>
    );
}

const LoginForm = () => {
    return (
        <form className="login-form">
            <div className="form-group">
                <input type="email" id="email" name="email" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
                <input type="password" id="password" name="password" required />
                <label htmlFor="password">Password</label>
            </div>
            <div className="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="dont-have-account">
                <p>Don't have an account? <a href="#">Sign up here</a></p>
            </div>
        </form>
    );
}

const SignUpForm = () => {
    return (
        <form className="signup-form">
            <div className="form-group">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
                <input type="email" id="email" name="email" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
                <input type="password" id="password" name="password" required />
                <label htmlFor="password">Password</label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="have-account">
                <p>Already have an account? <a href="#">Login here</a></p>
            </div>
        </form>
    );
}

export default Login;
