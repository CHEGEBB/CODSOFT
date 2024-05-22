import React from 'react';
import './Teams.scss'; // You can create a CSS file for styling if needed

// Define the TeamMember component
const TeamMember = ({ name, role, rating, bio, address, username, phoneNumber, email }) => {
  return (
    <div className="team-member">
      <div className="left">
        {/* Display profile picture here if you have one */}
        <h2>{name}</h2>
        <p>{role}</p>
        <div className="rating">
          <span>{rating}</span>
          <span>(12342 ratings)</span> {/* Example rating text */}
        </div>
        <p>{bio}</p>
      </div>
      <div className="right">
        <p>{address}</p>
        <p>{username}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

// Define the Teams component
const Teams = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: 'Sarah Smith',
      role: 'B.E.',
      rating: 4,
      bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer...',
      address: 'Shanti Nagar Bldg No B 4, Sector No 6, Mira Road',
      username: 'sarah_smith',
      phoneNumber: '123456789',
      email: 'sarah@example.com'
    },
    // Add more team members here
  ];

  return (
    <div className="page">
      <h1>My Team</h1>
      <div className="team-members">
        {/* Map through team members and render TeamMember component for each */}
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
