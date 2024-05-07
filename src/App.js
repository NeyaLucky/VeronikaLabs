import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    );
};

export default App;