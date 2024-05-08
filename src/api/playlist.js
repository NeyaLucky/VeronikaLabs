// src/api/playlists.js
import api from './axios';

// Create a new playlist
export const createPlaylist = async (title, isPublic, ownerId) => {
    const response = await api.post('/playlist/create', { title, is_public: isPublic, owner_id: ownerId });
    return response.data;
};

// Get all playlists
export const getAllPlaylists = async () => {
    const response = await api.get('/playlist');
    return response.data;
};

// Get playlist by ID
export const getPlaylistById = async (playlistId) => {
    const response = await api.get(`/playlist/${playlistId}`);
    return response.data;
};

// Update playlist by ID
export const updatePlaylist = async (playlistId, title, isPublic, ownerId) => {
    const response = await api.put(`/playlist/${playlistId}`, { title, is_public: isPublic, owner_id: ownerId });
    return response.data;
};

// Delete playlist by ID
export const deletePlaylist = async (playlistId) => {
    const response = await api.delete(`/playlist/${playlistId}`);
    return response.data;
};
