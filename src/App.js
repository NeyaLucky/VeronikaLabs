import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";
import Register from "./pages/Register/register";
import Navs from "./components/Navs/Navs";

const AppContent = () => {
    const location = useLocation();

    const noNavPaths = ["/login", "/register"];

    const shouldShowNav = !noNavPaths.includes(location.pathname);

    return (
        <>
            {shouldShowNav && <Navs />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
