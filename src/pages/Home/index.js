// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Playlist</h1>
            <img className="logo-image" src="../../../public/logo.jpg" alt="My logo" />
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
            <div className="info-container">
                <p>Welcome to my playlist! Here you'll find a curated collection of songs that inspire, uplift, and entertain me.</p>
                <p>Feel free to explore and discover new music!</p>
            </div>
        </div>
    );
};

export default Home;
