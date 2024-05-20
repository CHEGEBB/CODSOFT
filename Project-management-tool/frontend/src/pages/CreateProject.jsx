import React, { useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import './CreateProject.scss';

const CreateProject = () => {
    const [projectDetails, setProjectDetails] = useState({
        projectName: '',
        projectDescription: '',
        projectType: 'Internal',
        projectPhases: [],
        projectManager: '',
        projectDeadline: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const selectedPhases = [...projectDetails.projectPhases];
            if (checked) {
                selectedPhases.push(value);
            } else {
                const index = selectedPhases.indexOf(value);
                if (index !== -1) {
                    selectedPhases.splice(index, 1);
                }
            }
            setProjectDetails(prevState => ({
                ...prevState,
                projectPhases: selectedPhases
            }));
        } else {
            setProjectDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    const [teamMembers, setTeamMembers] = useState([
        { name: 'Alice', role: 'Developer', responsibility: 'Frontend Development', expertise: 'React, JavaScript', image: 'alice.jpg' },
        { name: 'Bob', role: 'Designer', responsibility: 'UI/UX Design', expertise: 'Adobe XD, Sketch', image: 'bob.jpg' },
        { name: 'Charlie', role: 'Project Manager', responsibility: 'Project Planning', expertise: 'Agile, Scrum', image: 'charlie.jpg' },
        { name: 'Dave', role: 'Tester', responsibility: 'Quality Assurance', expertise: 'Selenium, Jira', image: 'dave.jpg' },
        { name: 'Eve', role: 'DevOps', responsibility: 'Deployment & Automation', expertise: 'Docker, Jenkins', image: 'eve.jpg' },
        { name: 'Frank', role: 'Data Scientist', responsibility: 'Data Analysis', expertise: 'Python, TensorFlow', image: 'frank.jpg' }
    ]);

    const doughnutData = {
        labels: ['Planning', 'Execution', 'Monitoring', 'Closing'],
        datasets: [
            {
                label: 'Project Progress',
                data: [70, 50, 90, 80],
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
                hoverBackgroundColor: ['#0056b3', '#1e7e34', '#d39e00', '#bd2130'],
            },
        ],
    };

    const barData = {
        labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
        datasets: [
            {
                label: 'Client Satisfaction',
                data: [90, 85, 95, 80, 88],
                backgroundColor: '#007bff',
                hoverBackgroundColor: '#0056b3',
            },
        ],
    };

    const projectVariants = {
        initial: { x: '-100%' },
        animate: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 120,
                duration: 1
            }
        }
    };

    const waveGraphData = {
        labels: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'],
        datasets: [
            {
                label: 'Clients Served',
                data: [80, 85, 70, 90, 75],
                backgroundColor: '#007bff',
                hoverBackgroundColor: '#0056b3',
            },
        ],
    };
    const addMember = () => {
        // Add new member to teamMembers array
        const newMember = { name: '', role: '', responsibility: '', expertise: '', image: '' };
        setTeamMembers([...teamMembers, newMember]);
    };

    const removeMember = (index) => {
        // Remove member from teamMembers array
        const updatedMembers = [...teamMembers];
        updatedMembers.splice(index, 1);
        setTeamMembers(updatedMembers);
    };

    const updateMember = (index, field, value) => {
        // Update member field in teamMembers array
        const updatedMembers = [...teamMembers];
        updatedMembers[index][field] = value;
        setTeamMembers(updatedMembers);
    };

    return (
        <div className="project-create">
            <h1>Create Project</h1>
            <form className="animated-form">
                <div className="form-group">
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" id="projectName" name="projectName" value={projectDetails.projectName} onChange={handleInputChange} required className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="projectDescription">Project Description</label>
                    <textarea id="projectDescription" name="projectDescription" value={projectDetails.projectDescription} onChange={handleInputChange} required className="form-control"></textarea>
                </div>

                <div className="form-group">
                    <label>Project Type</label>
                    <div className="form-check">
                        <input type="radio" id="internal" name="projectType" value="Internal" checked={projectDetails.projectType === 'Internal'} onChange={handleInputChange} className="form-check-input" />
                        <label htmlFor="internal" className="form-check-label">Internal</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" id="external" name="projectType" value="External" checked={projectDetails.projectType === 'External'} onChange={handleInputChange} className="form-check-input" />
                        <label htmlFor="external" className="form-check-label">External</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Project Phases</label>
                    <div className="form-check">
                        <input type="checkbox" id="planning" name="projectPhases" value="Planning" checked={projectDetails.projectPhases.includes('Planning')} onChange={handleInputChange} className="form-check-input" />
                        <label htmlFor="planning" className="form-check-label">Planning</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="execution" name="projectPhases" value="Execution" checked={projectDetails.projectPhases.includes('Execution')} onChange={handleInputChange} className="form-check-input" />
                        <label htmlFor="execution" className="form-check-label">Execution</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="monitoring" name="projectPhases" value="Monitoring" checked={projectDetails.projectPhases.includes('Monitoring')} onChange={handleInputChange} className="form-check-input" />
                        <label htmlFor="monitoring" className="form-check-label">Monitoring</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="closing" name="projectPhases" value="Closing" checked={projectDetails.projectPhases.includes('Closing')} onChange={handleInputChange} className="form-check-input" />
                        <label htmlFor="closing" className="form-check-label">Closing</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="projectManager">Project Manager</label>
                    <input type="text" id="projectManager" name="projectManager" value={projectDetails.projectManager} onChange={handleInputChange} required className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="projectDeadline">Project Deadline</label>
                    <input type="date" id="projectDeadline" name="projectDeadline" value={projectDetails.projectDeadline} onChange={handleInputChange} required className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Create Project</button>
            </form>

            <div className="statistics">
                <h2>Project Statistics</h2>
                <div className="chart-container">
                    <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>

            <div className="team-members">
                <h2>Team Members</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Responsibility</th>
                            <th>Expertise</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembers.map((member, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        value={member.name}
                                        onChange={(e) => updateMember(index, 'name', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={member.role}
                                        onChange={(e) => updateMember(index, 'role', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={member.responsibility}
                                        onChange={(e) => updateMember(index, 'responsibility', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={member.expertise}
                                        onChange={(e) => updateMember(index, 'expertise', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => removeMember(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={addMember}>Add Member</button>
            </div>


            <div className="project-showcase">
                <h2>Animated Project Showcase</h2>
                <motion.div
                    className="project-cards"
                    variants={projectVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="card">Project 1</motion.div>
                    <motion.div className="card">Project 2</motion.div>
                    <motion.div className="card">Project 3</motion.div>
                </motion.div>
            </div>

            <div className="project-analytics">
                <h2>Project Analytics</h2>
                <div className="chart-container">
                    <h3>Best Projects of All Time</h3>
                    <Bar data={barData} />
                </div>
                <div className="chart-container">
                    <h3>Clients Served</h3>
                    <div className="wave-graph">
                        <Doughnut data={waveGraphData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;
