import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Deadline.scss';

const Deadline = () => {
  const [deadlines, setDeadlines] = useState([
    { title: 'Project Proposal', dueDate: '2024-05-31', team: 'Team A', description: 'Submit project proposal document.' },
    { title: 'Design Phase', dueDate: '2024-06-15', team: 'Team B', description: 'Complete design phase with prototypes.' },
    { title: 'Development Phase', dueDate: '2024-08-01', team: 'Team C', description: 'Finish initial development and unit testing.' },
    { title: 'Testing Phase', dueDate: '2024-09-10', team: 'Team D', description: 'Conduct system and integration testing.' },
    { title: 'Deployment', dueDate: '2024-10-05', team: 'Team E', description: 'Deploy the project to production.' }
  ]);

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const updateChart = () => {
      const labels = deadlines.map(deadline => deadline.title);
      const data = deadlines.map(deadline => {
        const now = new Date();
        const deadlineDate = new Date(deadline.dueDate);
        const timeDifference = deadlineDate - now;
        return Math.max(timeDifference / (1000 * 60 * 60 * 24), 0); // Convert milliseconds to days
      });

      if (chartRef.current) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.data.labels = labels;
          chartInstanceRef.current.data.datasets[0].data = data;
          chartInstanceRef.current.update();
        } else {
          chartInstanceRef.current = new Chart(chartRef.current, {
            type: 'bar',
            data: {
              labels,
              datasets: [{
                label: 'Days Left',
                data,
                backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4bc0c0', '#9966ff']
              }]
            },
            options: {
              scales: {
                x: {
                  grid: {
                    display: false
                  }
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    display: true
                  }
                }
              }
            }
          });
        }
      }
    };

    updateChart();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [deadlines]);

  const handleCreate = (e) => {
    e.preventDefault();
    const newDeadline = {
      title: e.target.title.value,
      dueDate: e.target.dueDate.value,
      team: e.target.team.value,
      description: e.target.description.value
    };
    setDeadlines([...deadlines, newDeadline]);
    e.target.reset();
  };

  const handleDelete = (index) => {
    const newDeadlines = deadlines.filter((_, i) => i !== index);
    setDeadlines(newDeadlines);
  };

  return (
    <div className="deadline-page">
      <header>
        <h1>Project Deadlines & Reminders</h1>
      </header>
      <main>
        <section className="chart-section">
          <h2>Deadlines Overview</h2>
          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>
        </section>
        <section className="deadlines">
          <h2>Upcoming Deadlines</h2>
          <ul>
            {deadlines.map((deadline, index) => (
              <li key={index}>
                <div className="deadline">
                  <div className="deadline-header">
                    <h3>{deadline.title}</h3>
                    <p>Due Date: {new Date(deadline.dueDate).toLocaleDateString()}</p>
                    <p>Team: {deadline.team}</p>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                  <div className="deadline-details">
                    <p>{deadline.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <form onSubmit={handleCreate}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" required />
            <label htmlFor="team">Team:</label>
            <input type="text" id="team" name="team" required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
            <button type="submit">Create Deadline</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Deadline;
