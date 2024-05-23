import React from 'react';
import {Link, useLocation} from "react-router-dom";
import "./Navs.scss"

const Navs = ({children}) => {
    const location = useLocation();
    let pageName = location.pathname.replace("/", "").toUpperCase();

    // Handle the root path specifically
    if (pageName === "") {
        pageName = "HOME";
    }

    return (
        <div>
            <div className="navs">
                <img className="logo-image" src="/logo.jpg" alt="My logo" />
                <h2>{pageName}</h2>
                <nav>
                    <div className="navs-links">
                        <Link to="/">Home</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/playlist">Playlist</Link>
                        <Link to="/users">Users</Link>
                    </div>
                </nav>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Navs;