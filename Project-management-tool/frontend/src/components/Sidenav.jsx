// src/components/SideNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.scss'

const SideNav = () => {
    return (
        <nav className="side-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to ="/project">Project</Link></li>
            </ul>
        </nav>
    );
};

export default SideNav;
