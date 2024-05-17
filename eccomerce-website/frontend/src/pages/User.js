import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.scss'; // Import the SCSS file

const User = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        // Fetch user details
        axios.get('/api/auth/me', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
                setUser(response.data);
                setName(response.data.name);
                setEmail(response.data.email);
            });
    }, []);

    const handleUpdate = () => {
        // Update user details
        axios.put('/api/auth/me', { name, email }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
                setUser(response.data);
                alert('Details updated successfully');
            });
    };

    const handleChangePassword = () => {
        // Update password
        axios.put('/api/auth/me/password', { currentPassword, newPassword }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(() => {
                alert('Password updated successfully');
            });
    };

    const handleProfilePictureUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);

        axios.post('/api/auth/me/profile-picture', formData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
                setUser(response.data);
                alert('Profile picture updated successfully');
            });
    };

    return (
        <div className="user-container">
            <h1>User Profile</h1>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button onClick={handleUpdate}>Update Details</button>

            <h2>Change Password</h2>
            <div>
                <label>Current Password:</label>
                <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            </div>
            <div>
                <label>New Password:</label>
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <button onClick={handleChangePassword}>Change Password</button>

            <h2>Upload Profile Picture</h2>
            <form onSubmit={handleProfilePictureUpload}>
                <input type="file" onChange={e => setProfilePicture(e.target.files[0])} />
                <button type="submit">Upload</button>
            </form>

            {user.profilePicture && <img src={`/${user.profilePicture}`} alt="Profile" />}
        </div>
    );
};

export default User;
