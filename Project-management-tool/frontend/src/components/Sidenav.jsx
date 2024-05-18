// src/components/SideNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.scss';

import dropdownIcon from '../images/gridicons--dropdown.svg';

const SideNav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownClick = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="side-nav">
            <ul>
                <li>
                    <Link to="/">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('project')} className="dropdown-toggle">
                        Project
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'project' && (
                        <ul className="dropdown">
                            <li><Link to="/project/overview">Overview</Link></li>
                            <li><Link to="/project/details">Details</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('tasks')} className="dropdown-toggle">
                        Tasks
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'tasks' && (
                        <ul className="dropdown">
                            <li><Link to="/tasks/todo">To Do</Link></li>
                            <li><Link to="/tasks/in-progress">In Progress</Link></li>
                            <li><Link to="/tasks/completed">Completed</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('progress')} className="dropdown-toggle">
                        Progress
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'progress' && (
                        <ul className="dropdown">
                            <li><Link to="/progress/reports">Reports</Link></li>
                            <li><Link to="/progress/charts">Charts</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('timeline')} className="dropdown-toggle">
                        Timeline
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'timeline' && (
                        <ul className="dropdown">
                            <li><Link to="/timeline/overview">Overview</Link></li>
                            <li><Link to="/timeline/milestones">Milestones</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
