// Progress.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Progress.scss';

const Progress = () => {
  // Refs for chart canvases
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const donutChartRef = useRef(null);
  const waveChartRef = useRef(null);

  useEffect(() => {
    // Sample data for charts
    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Tasks Completed',
        data: [10, 20, 30, 40, 50, 60, 70],
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1
      }]
    };

    const barData = {
      labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
      datasets: [{
        label: 'Task Progress',
        data: [30, 50, 70, 90],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4bc0c0']
      }]
    };

    const donutData = {
      labels: ['Completed', 'In Progress', 'Not Started'],
      datasets: [{
        label: 'Task Status',
        data: [30, 20, 50],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56']
      }]
    };

    const waveData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Workload',
        data: [12, 19, 3, 5, 2, 3, 10],
        fill: true,
        borderColor: '#ffcc00',
        tension: 0.4
      }]
    };

    // Create Line Chart
    if (lineChartRef.current) {
      new Chart(lineChartRef.current, {
        type: 'line',
        data: lineData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Create Bar Chart
    if (barChartRef.current) {
      new Chart(barChartRef.current, {
        type: 'bar',
        data: barData,
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Create Donut Chart
    if (donutChartRef.current) {
      new Chart(donutChartRef.current, {
        type: 'doughnut',
        data: donutData
      });
    }

    // Create Wave Chart
    if (waveChartRef.current) {
      new Chart(waveChartRef.current, {
        type: 'line',
        data: waveData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className="progress-page">
      <header>
        <h1>Project Progress</h1>
      </header>
      <main>
        <section className="project-details">
          <div className="detail">
            <h2>Project Name:</h2>
            <p>Project X</p>
          </div>
          <div className="detail">
            <h2>Duration:</h2>
            <p>Jan 1, 2023 - Dec 31, 2023</p>
          </div>
          <div className="detail">
            <h2>Days Left:</h2>
            <p>120 days</p>
          </div>
          <div className="detail">
            <h2>Completion Status:</h2>
            <p>70%</p>
          </div>
        </section>
        <section className="charts-section">
          <div className="chart-container">
            <canvas ref={lineChartRef}></canvas>
          </div>
          <div className="chart-container">
            <canvas ref={barChartRef}></canvas>
          </div>
          <div className="chart-container">
            <canvas ref={donutChartRef}></canvas>
          </div>
          <div className="chart-container">
            <canvas ref={waveChartRef}></canvas>
          </div>
        </section>
        <section className="top-workers">
          <h2>Top Performers</h2>
          <ul>
            <li>John Doe - 90% Completion</li>
            <li>Jane Smith - 85% Completion</li>
            <li>Alex Johnson - 80% Completion</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Progress;
