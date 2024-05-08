import React from 'react';
import "./index.scss"

const Playlist = () => {
    // Example playlist data (replace with actual data fetching)
    const playlist = [
        {
            id: 1,
            title: "My dear friends",
            artist: "John Doe",
            genre: "Pop",
            duration: "8:45",
            cover: "/static/my_dear_friends.jpg"
        },
        {
            id: 2,
            title: "You love me",
            artist: "Jane Smith",
            genre: "Rock",
            duration: "12:34",
            cover: "/static/You love me.jpg"
        },
        {
            id: 3,
            title: "Goodbye",
            artist: "Alex Johnson",
            genre: "Jazz",
            duration: "10:22",
            cover: "/static/doogbay.jpg"
        }
    ];

    return (
        <div className="playlist-container">
            <img className="logo-image" src="/static/logo.jpg" alt="My logo" />
            <div className="history-container">
                <h2>My love</h2>
                <ul className="song-list">
                    {playlist.map((song) => (
                        <li key={song.id} className="song">
                            <div className="song-details">
                                <div className="left-side">
                                    <div className="sticky">
                                        <img src={song.cover} alt={song.title} />
                                        <div className="info">
                                            <h3>{song.title}</h3>
                                            <p>Artist: {song.artist}</p>
                                            <p>Genre: {song.genre}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-panel">
                                    <span className="time-display">{song.duration}</span>
                                    <button className="control-button">Stop</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Playlist;