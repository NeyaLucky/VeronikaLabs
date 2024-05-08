// src/api/users.js
import api from './axios';

// Create a new user
export const createUser = async (email, username) => {
    const response = await api.post('/user/create', { email, username });
    return response.data;
};

// Get all users
export const getAllUsers = async () => {
    const response = await api.get('/user');
    return response.data;
};

// Get user by ID
export const getUserById = async (userId) => {
    const response = await api.get(`/user/${userId}`);
    return response.data;
};

// Update user by ID
export const updateUser = async (userId, email, username) => {
    const response = await api.put(`/user/${userId}`, { email, username });
    return response.data;
};

// Delete user by ID
export const deleteUser = async (userId) => {
    const response = await api.delete(`/user/${userId}`);
    return response.data;
};
