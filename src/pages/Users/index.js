// src/pages/UsersPage.js
import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../api/users'; // Import the API function
import "./index.scss";

const Users = () => {
    const [users, setUsers] = useState([]); // State to store users

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers(); // Fetch users from the backend
                setUsers(data.users); // Update state with fetched users
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array to run only once after the component mounts

    return (
        <div className="users-container">
            <div className="container_for_users">
                <h2>All Users</h2>
                <ul className="user-list">
                    {users.map((user) => (
                        <li key={user.id} className="user">
                            <div className="user-details">
                                <img src={"public/user_avatar.png"} alt={user.name} />
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
