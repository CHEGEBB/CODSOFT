import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Progress.scss';

const Progress = () => {
  // Refs for chart canvases
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const donutChartRef = useRef(null);
  const waveChartRef = useRef(null);
  const productivityChartRef = useRef(null);

  const topPerformers = [
    { name: 'Sean Davis', role: 'Developer', completion: 90 },
    { name: 'Jane Smith', role: 'Designer', completion: 82 },
    { name: 'Alex Johnson', role: 'Project Manager', completion: 78 },
    { name: 'Justin Simons', role: 'UI/UX Designer', completion: 76 },
    { name: 'Micheal Johnson', role: 'Developer', completion: 74 },
    { name: 'David Smith', role: 'Project Manager', completion: 72 },
    { name: 'Evans Johnson', role: 'UI/UX Designer', completion: 70 },
    { name: 'Janet Williams', role: 'Search Engine Optimization Engineer', completion: 66 },
    { name: 'Rahul Singh', role: 'Quality Assurance Engineer', completion: 64 },
    { name: 'Emily Davis', role: 'Content Writer', completion: 68 }
  ];

  const projects = [
    { name: 'SmartLife Web App', progress: 80 },
    { name: 'CityScape Ecommerce', progress: 60 },
    { name: 'Health Tracker', progress: 40 },
    { name: 'Task Automation Bots', progress: 50 }
  ];

  useEffect(() => {
    const destroyCharts = () => {
      [lineChartRef, barChartRef, donutChartRef, waveChartRef, productivityChartRef].forEach(ref => {
        if (ref.current) {
          Chart.getChart(ref.current)?.destroy();
        }
      });
    };

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

    const productivityData = {
      labels: topPerformers.map(performer => performer.name),
      datasets: [{
        label: 'Productivity',
        data: topPerformers.map(performer => performer.completion),
        fill: true,
        borderColor: '#4B0082',
        backgroundColor: '#9400D3',
        tension: 0.4
      }]
    };

    destroyCharts();

    if (lineChartRef.current) {
      new Chart(lineChartRef.current, {
        type: 'line',
        data: lineData,
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }
      });
    }

    if (barChartRef.current) {
      new Chart(barChartRef.current, {
        type: 'bar',
        data: barData,
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }
      });
    }

    if (donutChartRef.current) {
      new Chart(donutChartRef.current, {
        type: 'doughnut',
        data: donutData
      });
    }

    if (waveChartRef.current) {
      new Chart(waveChartRef.current, {
        type: 'line',
        data: waveData,
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }
      });
    }

    if (productivityChartRef.current) {
      new Chart(productivityChartRef.current, {
        type: 'line',
        data: productivityData,
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }
      });
    }
  }, []);

  useEffect(() => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.width = `${value}%`;
    });
  }, []);

  return (
    <div className="progress-page">
      <div className="facts">
        <div className="overall-completion">
          <h2>Overall Completion</h2>
          <p>36.80%</p>
        </div>
        <div className="days-left">
          <h2>Days Left</h2>
          <p>120 days</p>
        </div>
        <div className="tasks-per-day">
          <h2>Tasks Per Day</h2>
          <p>5/day</p>
        </div>
        <div className="number-completed">
          <h2>Number of Completed Projects</h2>
          <p>500</p>
        </div>
      </div>
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
          <div className="two">
            <div className="current-projects-progress">
              {projects.map((project, index) => (
                <div key={index} className={`project project${index + 1}`}>
                  <h2>{project.name}</h2>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      data-value={project.progress}
                    ></div>
                  </div>
                  <p>{project.progress}%</p>
                </div>
              ))}
            </div>
            <div className="data2">
              <div className="chart-container">
                <canvas ref={donutChartRef}></canvas>
              </div>
              <div className="chart-container">
                <canvas ref={waveChartRef}></canvas>
              </div>
            </div>
          </div>
        </section>
        <section className="top-workers">
          <h2>Top Performers</h2>
          <div className="performers-container">
            {topPerformers.map((performer, index) => (
              <div className="performer" key={index}>
                <div className="details">
                  <h3>{performer.name}</h3>
                  <p>Role: {performer.role}</p>
                  <p>Completion: {performer.completion}%</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="productivity-graph">
          <h2>Productivity of Top Performers</h2>
          <div className="chart-container">
            <canvas ref={productivityChartRef}></canvas>
          </div>
        </section>
        <section className="milestones">
          <h2>Milestones</h2>
          <ul>
            <li>Milestone 1 - Due Date: Feb 28, 2023</li>
            <li>Milestone 2 - Due Date: May 15, 2023</li>
            <li>Milestone 3 - Due Date: Aug 10, 2023</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Progress;
