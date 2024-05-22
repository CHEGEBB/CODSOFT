// Teams.jsx

import React from 'react';
import './Teams.scss';

const TeamMember = ({ name, role, rating, description, address, username, phone, email }) => {
  return (
    <div className="team-member">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="profile-picture">
              {/* Your profile picture */}
            </div>
            <h2>{name}</h2>
            <p className="role">{role}</p>
            <p className="rating">{rating}</p>
          </div>
          <div className="flip-card-back">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{address}</p>
            <div className="contact-info">
              <p>{username}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  const teamMembers = [
    { name: 'Sarah Smith', role: 'B.E.', rating: '4', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', address: 'Shanti Nagar Bldg No B 4, Sector No 6, Mira Road', username: 'sarah_smith', phone: '123456789', email: 'sarah@example.com' },
    // Add more team members here
  ];

  return (
    <div className="teams-page">
      <h1>My Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
