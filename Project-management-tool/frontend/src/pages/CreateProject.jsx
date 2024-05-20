import React from 'react';
import { Bar } from 'react-chartjs-2';
import './CreateProject.scss';

const projects = [
    {
        name: 'Social Geek Made',
        category: 'UI/UX Design',
        attachments: 5,
        duration: '4 Month',
        members: 5,
        progress: 10,
        daysLeft: 35,
    },
    {
        name: 'Practice to Perfect',
        category: 'Website Design',
        attachments: 5,
        duration: '4 Month',
        members: 5,
        progress: 10,
        daysLeft: 35,
    },
    // Add more projects as needed
];

const CreateProject = () => {
    const barData = {
        labels: projects.map(project => project.name),
        datasets: [
            {
                label: 'Progress',
                data: projects.map(project => project.progress),
                backgroundColor: 'rgba(0, 123, 255, 0.6)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        scales: {
            y: { beginAtZero: true },
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutBounce',
        },
    };

    return (
        <div className="project-page">
            <div className="project-search">
                <input type="text" placeholder="Search" />
                <div className="project-categories">
                    <button>All</button>
                    <button>Started</button>
                    <button>Approval</button>
                    <button>Completed</button>
                </div>
            </div>

            <div className="project-create-section">
                <h1>Create Project</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" id="projectName" name="projectName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectDescription">Project Description</label>
                        <textarea id="projectDescription" name="projectDescription" required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Project Type</label>
                        <div>
                            <input type="radio" id="internal" name="projectType" value="Internal" />
                            <label htmlFor="internal">Internal</label>
                        </div>
                        <div>
                            <input type="radio" id="external" name="projectType" value="External" />
                            <label htmlFor="external">External</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Project Phases</label>
                        <div>
                            <input type="checkbox" id="planning" name="projectPhases" value="Planning" />
                            <label htmlFor="planning">Planning</label>
                        </div>
                        <div>
                            <input type="checkbox" id="execution" name="projectPhases" value="Execution" />
                            <label htmlFor="execution">Execution</label>
                        </div>
                        <div>
                            <input type="checkbox" id="monitoring" name="projectPhases" value="Monitoring" />
                            <label htmlFor="monitoring">Monitoring</label>
                        </div>
                        <div>
                            <input type="checkbox" id="closing" name="projectPhases" value="Closing" />
                            <label htmlFor="closing">Closing</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectManager">Project Manager</label>
                        <input type="text" id="projectManager" name="projectManager" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectDeadline">Project Deadline</label>
                        <input type="date" id="projectDeadline" name="projectDeadline" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectBudget">Project Budget</label>
                        <input type="number" id="projectBudget" name="projectBudget" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectResources">Project Resources</label>
                        <textarea id="projectResources" name="projectResources" required></textarea>
                    </div>
                    <button type="submit">Create Project</button>
                </form>
            </div>

            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-header">
                            <h2>{project.name}</h2>
                            <p>{project.category}</p>
                        </div>
                        <div className="project-details">
                            <p>Attachments: {project.attachments}</p>
                            <p>Duration: {project.duration}</p>
                            <p>Members: {project.members}</p>
                            <p>Progress: {project.progress}%</p>
                        </div>
                        <div className="project-progress">
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                            <p>{project.daysLeft} Days Left</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="project-overview">
                <h2>Project Overview</h2>
                <div className="overview-chart">
                    <Bar data={barData} options={barOptions} />
                </div>
                <div className="timeline">
                    <h3>Project Timeline</h3>
                    <div className="timeline-step">
                        <div className="step-title">Planning</div>
                        <div className="step-bar" style={{ width: '25%' }}></div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-title">Execution</div>
                        <div className="step-bar" style={{ width: '50%' }}></div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-title">Monitoring</div>
                        <div className="step-bar" style={{ width: '75%' }}></div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-title">Closing</div>
                        <div className="step-bar" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>

            <div className="additional-content">
                <h2>Tips and Statistics</h2>
                <p>Projects with clear goals and milestones are 20% more likely to be completed on time.</p>
                <p>80% of high-performing projects have a dedicated project manager.</p>
                <p>Using project management tools can improve team collaboration by 50%.</p>
            </div>
        </div>
    );
};

export default CreateProject;
