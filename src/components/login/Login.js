import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../AuthContext';
import './login.css';
import FitClan from '../../assets/logo.svg';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            alert('User not registerd. Please signup first.')
        }
    };

    return (
        <div className='login'>
            <div className="login_container">
                <img src={FitClan} alt="" />
                <hr />
                <div className="wrapper">
                    <h3>Sign in to Fit-Clan</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='d-flex flex-column my-3'>
                            <label className='text-left'>Email Address</label>
                            <input onChange={(e) => setEmail(e.target.value)} className='' type='email' placeholder='johndoe@abc.com'/>
                        </div>
                        <div className='d-flex flex-column my-3'>
                            <label className='text-left'>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className='' type='password' placeholder='******'/>
                        </div>
                        <button type='button submit' className='btn btn-primary w-100 my-3'>
                            Sign In
                        </button>
                    </form>
                    <p className='text-center'>Don't have an account? <Link to="/signup"><u>Signup</u></Link></p>
                </div>
            </div>
        </div>
    )
};