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
                <img className="logo-image" src="../../../public/logo.jpg" alt="My logo" />
                <h1>{pageName}</h1>
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Navs;