import React, { useEffect, useRef, useState } from 'react';
import './Home.scss';
import EmailIcon from '../images/em.svg';
import NotificationIcon from '../images/bell.svg';
import SearchIcon from '../images/fluent--search-32-filled.svg';
import user from '../images/john.jpg';
import CalendarIcon from '../images/calendar.svg';
import Chart from 'chart.js/auto';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = ({ darkMode }) => {
    const lineBarChartRef = useRef(null);
    const doughnutChartRef = useRef(null);
    const [percentageCompleted, setPercentageCompleted] = useState(0);
    const [percentageInProgress, setPercentageInProgress] = useState(0);
    const [percentageDelayed, setPercentageDelayed] = useState(0);

    useEffect(() => {
        // Simulate an API call to get project status
        setTimeout(() => {
            setPercentageCompleted(75);
            setPercentageInProgress(50);
            setPercentageDelayed(20);
        }, 500);

        if (lineBarChartRef.current) {
            lineBarChartRef.current.destroy();
        }
        if (doughnutChartRef.current) {
            doughnutChartRef.current.destroy();
        }

        const lineBarCtx = document.getElementById('lineBarChart');
        if (lineBarCtx) {
            const newLineBarChart = new Chart(lineBarCtx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        type: 'line',
                        label: 'Task Completion Rate',
                        data: [25, 65, 35, 65, 85, 55, 45, 55, 75, 75, 95, 55], // Sample data
                        borderColor: darkMode ? 'rgba(0, 0, 139, 1)' : '#483D8B',
                        tension: 0.1,
                        borderWidth: 5,
                        fill: false,
                    },
                    {
                        label: 'Contribution to Projects',
                        data: [65, 59, 80, 51, 56, 45, 40, 55, 60, 75, 45, 50],
                        backgroundColor: darkMode ? 'rgba(72, 61, 139, 0.5)' : 'rgba(255, 99, 132, 0.5)',
                        borderColor: darkMode ? 'rgba(72, 61, 139, 1)' : 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Contribution to Team-Projects',
                        data: [35, 45, 85, 70, 45, 40, 30, 50, 45, 40, 60, 35],
                        backgroundColor: darkMode ? '#C71585' : '#00CED1',
                        borderColor: darkMode ? '#C71585' : '#00CED1',
                        borderWidth: 1,
                    }]
                },
                options: {
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            lineBarChartRef.current = newLineBarChart;
        }

        const doughnutCtx = document.getElementById('doughnutChart');
        if (doughnutCtx) {
            const newDoughnutChart = new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Contribution to Projects', 'Contribution to Team-Projects', 'Task Completion Rate'],
                    datasets: [{
                        data: [65, 59, 80], // Change this to reflect actual data
                        backgroundColor: [
                            darkMode ? 'rgba(72, 61, 139, 0.5)' : 'rgba(255, 99, 132, 0.5)',
                            darkMode ? '#C71585' : '#00CED1',
                            darkMode ? 'rgba(0, 0, 139, 1)' : '#23CE6B'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });

            doughnutChartRef.current = newDoughnutChart;
        }
    }, [darkMode, percentageCompleted, percentageInProgress, percentageDelayed]);

    const iconStyle = {
        filter: darkMode
            ? 'invert(35%) sepia(64%) saturate(5000%) hue-rotate(320deg) brightness(100%) contrast(100%)'
            : 'invert(15%) sepia(100%) saturate(5000%) hue-rotate(330deg) brightness(90%) contrast(85%)'
    };

    const headerTextStyle = {
        color: darkMode ? '#fff' : '#333'
    };

    const circularProgressStyle = (percentage) => buildStyles({
        pathColor: darkMode ? '#48c774' : '#ff3860',
        trailColor: darkMode ? '#aaa' : '#ddd',
        textColor: darkMode ? '#fff' : '#333'
    });
    

    return (
        <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
            <div className="header" style={headerTextStyle}>
                <div className="intro">
                    <h1>Dashboard</h1>
                </div>
                <div className="search">
                    <img src={SearchIcon} alt="Search" style={iconStyle} />
                    <input type="text" placeholder="Search here..." />
                </div>
                <div className="reach">
                    <div className="emails">
                        <img src={EmailIcon} alt="Email" style={iconStyle} />
                        <p>My Emails</p>
                    </div>
                    <div className="notifications">
                        <img src={NotificationIcon} alt="Notification" style={iconStyle} />
                        <p>Notifications</p>
                    </div>
                    <div className="calendar">
                        <img src={CalendarIcon} alt="Calendar" style={iconStyle} />
                        <p>Schedule</p>
                    </div>
                </div>
                <div className="user-logged-in">
                    <div className="profile-picture">
                        <img src={user} alt="User" />
                    </div>
                    <div className="user-info">
                        <div className="name">
                            <p>John Doe</p>
                        </div>
                        <div className="email">
                            <p>Johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="us">
            <div className="project-management">
                    <h2>Manage Your Project</h2>
                    <p>At ProjectProctor we manage your project automatically with our best AI systems</p>
                </div>
                <div className="project-creation">
                    <h2>Create a Project</h2>
                    <p>Start creating your project by clicking the button below</p>
                    <button>Create Project</button>
                    </div>
            </div>
            <div className="manage">
            <div className="charts">
            <div className="my-project-statistics">
                <h2>My Project Statistics</h2>
                <canvas id="lineBarChart"></canvas>
            </div>
            <div className="doughnut-chart-container">
                <h2>Project Contribution Breakdown</h2>
                <canvas id="doughnutChart"></canvas>
            </div>
            </div>
                
                <div className="project-status">
                <div className="proj-status">
                <h2>Project Status</h2>
                </div>
                    <div className="status">
                        <div className="stat">
                            <h3>Completed</h3>
                            <CircularProgressbar
                                value={percentageCompleted}
                                text={`${percentageCompleted}%`}
                                styles={circularProgressStyle(percentageCompleted)}
                                className="percentage-text"
                            />
                        </div>
                        <div className="stat">
                            <h3>On Progress</h3>
                            <CircularProgressbar
                                value={percentageInProgress}
                                text={`${percentageInProgress}%`}
                                styles={circularProgressStyle(percentageInProgress)}
                                className="percentage-text"
                            />
                        </div>
                        <div className="stat">
                            <h3>Delayed</h3>
                            <CircularProgressbar
                                value={percentageDelayed}
                                text={`${percentageDelayed}%`}
                                styles={circularProgressStyle(percentageDelayed)}
                                className="percentage-text"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="financial-stats">
                <h2>$ 24,567.33</h2>
                <p>+2.7% than last week</p>
                <div className="time-intervals">
                    <button>Daily</button>
                    <button>Weekly</button>
                    <button>Monthly</button>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '70%' }}>On Progress 70%</div>
                </div>
            </div>
            <div className="workload-dashboard">
                <h2>Workload Dashboard For CMS Websites</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
            </div>
            <div className="project-statistics">
                <h2>Project Statistics</h2>
                <p>Manage your project in one touch</p>
                <p>Let Workload manage your project automatically with our best AI systems</p>
                <div className="stats">
                    <div className="stat">
                        <h3>Total Clients</h3>
                        <p>68</p>
                        <p>+0.5%</p>
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <div className="project-categories">
                <h2>Project Categories</h2>
            </div>
            <div className="messages">
                <h2>Messages</h2>
            </div>
        </div>
    );
}

export default Home;
