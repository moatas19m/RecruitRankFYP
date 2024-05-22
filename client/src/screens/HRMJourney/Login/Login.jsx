import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './login.css';

function Login() {
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
    }

    const navigateByRole = (role) => {
        if (role === 'Recruiter') {
            navigate("/HRView");
        } else if (role === 'Candidate') {
            navigate("/CANDView");
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const { data } = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            setIsLoading(false);
            navigateByRole(data.user.role);
        } catch (error) {
            setIsLoading(false);
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="TalentHiveLogo">Talent Hive</div>
                <form onSubmit={onSubmit} className='form'>
                    <input type="email" className="form-control" name='email'
                        value={email} onChange={onChange} placeholder='Enter your email' required />
                    <input type="password" className="form-control" name='password'
                        value={password} onChange={onChange} placeholder='Enter your password' required />
                    <div className="form-group">
                        {isLoading ? <CircularProgress /> : <button type="submit" className='btn'>Login</button>}
                        {error && <div className="notFound">{error}</div>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
