import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.scss"

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if (username && password) {
            // Save the username to localStorage (or any other persistent storage)
            localStorage.setItem('loggedInUser', username);
            localStorage.setItem('loggedInEmail', email);

            navigate('/profile');
        } else {
            alert('Invalid credentials');
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};

export default Login;
