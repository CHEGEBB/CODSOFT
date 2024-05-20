import React from 'react';
import './ProjectDetails.scss'; // Import the external SCSS file for styling

const ProjectDetails = () => {
  // Sample project data
  const project = {
    id: 258,
    title: 'Android Application',
    clientName: 'Cara Stevens',
    startDate: '05/10/2021',
    endDate: '07/25/2021',
    deadline: '08/25/2021',
    members: 'useruseruser',
    priority: 'High',
    progress: 'Active',
    status: 'Active',
    createdBy: 'Alex Smith',
    client: 'ZMK Tech LLP.',
    version: 'v1.2.0',
    lastUpdated: '16.08.2022 12:15:57',
    created: '10.07.2022 23:36:57',
    completed: 'Project completed in 60%. Remaining close the project, sign a contract and invoice.',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    tags: 'Photoshop HTML, SCSS Laravel 7.0.0 ReactJs',
    files: [
      { name: 'Design file.pdf', size: '2.7 mb' },
      { name: 'Design file.psd', size: '22.5 mb' },
      { name: 'Project detail.doc', size: '2.8 mb' }
    ]
  };

  return (
    <div className="project-details-page">
      <div className="project-details">
        <h2>Project Details</h2>
        <table className="project-details-table">
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{project.id}</td>
            </tr>
            <tr>
              <td>Project Title:</td>
              <td>{project.title}</td>
            </tr>
            <tr>
              <td>Client Name:</td>
              <td>{project.clientName}</td>
            </tr>
            <tr>
              <td>Start Date:</td>
              <td>{project.startDate}</td>
            </tr>
            <tr>
              <td>End Date:</td>
              <td>{project.endDate}</td>
            </tr>
            <tr>
              <td>Deadline:</td>
              <td>{project.deadline}</td>
            </tr>
            <tr>
              <td>Members:</td>
              <td>{project.members}</td>
            </tr>
            <tr>
              <td>Priority:</td>
              <td>{project.priority}</td>
            </tr>
            <tr>
              <td>Progress:</td>
              <td>{project.progress}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{project.status}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="additional-details">
        <h2>Additional Details</h2>
        <p>Status: {project.status}</p>
        <p>Priority: {project.priority}</p>
        <p>Created by: {project.createdBy}</p>
        <p>Client: {project.client}</p>
        <p>Version: {project.version}</p>
        <p>Last Updated: {project.lastUpdated}</p>
        <p>Created: {project.created}</p>
        <p>Completed: {project.completed}</p>
        <h3>Project description</h3>
        <p>{project.description}</p>
        <h3>Project tags</h3>
        <p>{project.tags}</p>
        <h3>Project files</h3>
        {project.files.map((file, index) => (
          <p key={index}>
            {file.name} ({file.size})
          </p>
        ))}
      </div>

      {/* Other sections */}
      <div className="other-sections">
        <h2>Other Sections</h2>
        <div className="section">
          <h3>Section 1</h3>
          <p>Wonderful data goes here...</p>
        </div>
        <div className="section">
          <h3>Section 2</h3>
          <p>More wonderful data goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
