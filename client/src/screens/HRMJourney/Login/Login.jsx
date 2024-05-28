import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './login.css';
import { useAuth } from '../../../AuthContext';  // Make sure the path is correct

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Auto-redirect if already logged in
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            navigateByRole(parsedUser.role);
        }
    }, [navigate]);

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigateByRole = (role) => {
        switch (role) {
            case 'Recruiter':
                navigate("/HRView");
                break;
            case 'Applicant':
                navigate("/CANDView");
                break;
            case 'Admin':
                navigate("/ADMINView");
                break;
            default:
                setError("Unknown role or unauthorized access.");
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const { data } = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            login();  // Update authentication state
            navigateByRole(data.user.role);
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed. Please try again.';
            setError(message);
            console.error("Login error:", message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="main">
            <ul className="bg-bubbles">
                {[...Array(10)].map((_, index) => <li key={index}></li>)}
            </ul>
            <div className="container">
                <h1>Welcome to RecruitRanks</h1>
                <form onSubmit={onSubmit} className='form'>
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={email}
                        onChange={onChange}
                        placeholder='Enter your email'
                        required
                    />
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        value={password}
                        onChange={onChange}
                        placeholder='Enter your password'
                        required
                    />
                    <div className="form-group">
                        {isLoading ? <CircularProgress /> : <button type="submit" className='btn'>Login</button>}
                        {error && <div className="error-message">{error}</div>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
