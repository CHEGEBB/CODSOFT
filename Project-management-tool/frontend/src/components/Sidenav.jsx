// src/components/SideNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className="side-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* Add other navigation links here */}
            </ul>
        </nav>
    );
};

export default SideNav;
