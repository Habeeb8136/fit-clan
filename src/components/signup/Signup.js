import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../AuthContext';
import './signup.css';

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/details')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className='signup'>
      <h3>Create a new account</h3>
      <div className="input_container">
        <form onSubmit={handleSubmit}>
          <div className="email_container">
            <label>Email Address</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='johndoe@abc.com' />
          </div>
          <div className="password_container">
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" minLength={6} placeholder='******' />
          </div>
          <button  type="submit" className='btn btn-primary my-3'>Sign Up</button>
        </form>
        <p className='my-2 text-smaller'><small>Already have an account? <strong><Link to="/login"><u>Login</u></Link></strong></small></p>
      </div>
    </div >
  )
}
