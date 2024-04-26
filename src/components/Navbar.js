import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">My Website</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/collections" className="nav-link">Collections</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
