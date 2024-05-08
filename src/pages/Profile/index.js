import React from 'react';
import "./index.scss"

const Profile = () => {
    // Example user data (replace with actual data fetching if required)
    const user = {
        name: "John Doe",
        username: "johndoe123",
        email: "johndoe@example.com",
        avatar: "/static/user_avatar.png"
    };

    return (
        <div className="profile-container">
            <img className="logo-image" src="/static/logo.jpg" alt="My logo" />
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
                        <span className="label">Username:</span>
                        <span className="value">{user.username}</span>
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
