import React, { useEffect, useRef } from 'react';
import './Home.scss';
import EmailIcon from '../images/dashicons--email-alt.svg';
import NotificationIcon from '../images/mingcute--notification-fill.svg';
import SearchIcon from '../images/fluent--search-32-filled.svg';
import user from '../images/john.jpg';
import CalendarIcon from '../images/ion--calendar-sharp.svg';
import Chart from 'chart.js/auto';

const Home = () => {
    const chartRef = useRef(null); 

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('myChart');
        if (ctx) {
            const newChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            chartRef.current = newChart; 
        }
    }, []);

    return ( 
        <div className="home">
         <canvas id="myChart"></canvas>
        <div className="header">
        <div className="intro">
        <h1>Dashboard</h1>
        </div>
        <div className="search">
        <img src={SearchIcon} alt="Search" />
        <input type="text" placeholder="Search here..." />
        </div>
        <div className="reach">
        <div className="emails">
        <img src={EmailIcon} alt="Email" />
        <p>My Emails</p>
        </div>
        <div className="notifications">
        <img src={NotificationIcon} alt="Notification" />
        <p>Notifications</p>
        </div>
        <div className="calendar">
        <img src={CalendarIcon} alt="Calendar" />
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
                <p>Let Wokrload manage your project automatically with our best AI systems</p>
                <div className="stats">
                    <div className="stat">
                        <h3>Total Clients</h3>
                        <p>68</p>
                        <p>+0.5%</p>
                        <p>71%</p>
                    </div>
                    {/* Add more project statistics here */}
                </div>
            </div>
            <div className="project-categories">
                <h2>Project Categories</h2>
                {/* Add project categories here */}
            </div>
            <div className="messages">
                <h2>Messages</h2>
                {/* Add messages and conversations here */}
            </div>
        </div>
    );
}
 
export default Home;
