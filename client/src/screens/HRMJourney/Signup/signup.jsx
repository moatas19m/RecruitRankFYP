import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('Applicant');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post('/api/auth/register', {
                name,
                email,
                password,
                phone,
                address,
                role,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Signup failed. Please try again.';
            setError(message);
            console.error('Signup error:', message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="main">
            <ul className="bg-bubbles">
                {[...Array(10)].map((_, index) => <li key={index}></li>)}
            </ul>
            <div className="SignUpcontainer">
                <h1>Signup to RecruitRanks</h1>
                <form onSubmit={onSubmit} className='form'>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your name'
                        required
                    />
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        required
                    />
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password'
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Enter your phone number'
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        name='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Enter your address'
                        required
                    />
                    <select
                        className="form-control"
                        name='role'
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="Applicant">Applicant</option>
                        <option value="Recruiter">Recruiter</option>
                    </select>
                    <div className="form-group">
                        <p className="login-link">
                            <b>Already have an account?</b> <a href="/login">Login</a>
                        </p>
                        <br /> {/* Add some space */}
                        {isLoading ? <CircularProgress /> : <button type="submit" className='btn'>Sign Up</button>}
                        {error && <div className="error-message">{error}</div>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
