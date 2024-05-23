import React from 'react';
import "./index.scss"


const Profile = () => {
    // Example user data (replace with actual data fetching if required)
    const username = localStorage.getItem('loggedInUser');
    const email = localStorage.getItem('loggedInEmail');

    // Example user data with the fetched username
    const user = {
        name: username || 'Unknown User',
        email:email || 'Unknown Email', // Adjust this email pattern as needed
        avatar: "/user_avatar.png"
    };
    return (
        <div className="profile-container">
            <div className="profile">
                <div className="profile-picture">
                    <img src={user.avatar} alt="User Avatar" />
                </div>
                <div className="profile-details">
                    <h2>User Profile</h2>
                    <div className="detail">
                        <span className="label">Name:</span>
                        <span className="value">{user.name}</span>
                    </div>
                    <div className="detail">
                        <span className="label">Email:</span>
                        <span className="value">{user.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
