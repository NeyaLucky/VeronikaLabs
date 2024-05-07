// src/pages/UsersPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"

const Users = () => {
    // Example user data (replace this with dynamic data fetching if needed)
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            username: "johndoe",
            avatar: "/static/user_avatar.png"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            username: "janesmith",
            avatar: "/static/user_avatar.png"
        }
    ];

    return (
        <div className="users-container">
            <h1>Playlist</h1>
            <img className="logo-image" src="../../../public/logo.jpg" alt="My logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <div className="container_for_users">
                <h2>All Users</h2>
                <ul className="user-list">
                    {users.map((user) => (
                        <li key={user.id} className="user">
                            <div className="user-details">
                                <img src={user.avatar} alt={user.name} />
                                <div className="info">
                                    <h3>{user.name}</h3>
                                    <p>Email: {user.email}</p>
                                    <p>Username: {user.username}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Users;