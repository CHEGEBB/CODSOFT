// src/components/SideNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.scss';
import Home from '../images/home.svg';
import dropdownIcon from '../images/drop2.svg';
import DashboardIcon from '../images/ic--sharp-dashboard.svg';
import ProjectIcon from '../images/project.svg';
import TaskIcon from '../images/task.svg';
import ProgressIcon from '../images/progress.svg';
import TimelineIcon from '../images/timeline.svg';
import TeamIcon from '../images/team.svg';

const SideNav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownClick = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="side-nav">
        <div className="my-dashboard">
        <div className="dash">
        <img src={DashboardIcon} alt="Dashboard Icon" />
        </div>
        <div className="board">
        <h1>My Dashboard</h1>
        </div>
        </div>
            <ul>
                <li>
                    <Link to="/">
                        <img src={Home} alt="Home Icon" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('project')} className="dropdown-toggle">
                        <img src={ProjectIcon} alt="Project Icon" />
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
                       <img src={TaskIcon} alt="Task Icon" /> 
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
                       <img src={ProgressIcon} alt="Progress Icon" />
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
                       <img src={TimelineIcon} alt="Timeline Icon" />
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
                <li>
                    <Link to="/teams">
                        <img src={TeamIcon} alt="Team Icon" />
                        Teams
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
