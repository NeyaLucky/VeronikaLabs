// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";



const Home = () => {
    const list = {playlist: "/playlist.jpg"};
    


    return (
        <div className="home-container">
            <div className="info-container">
                <p>Welcome to my playlist! Here you'll find a curated collection of songs that inspire, uplift, and entertain me.</p>
                <p>Feel free to explore and discover new music!</p>
                <img src={list.playlist} alt="Playlist" />
            </div>
        </div>
    );
};

export default Home;
