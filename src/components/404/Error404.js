import React from 'react';
import './Error404.css';
import Logo from '../../assets/logo.svg';

const Error404 = () => {
    return (
        <div className='error'>
            <img src={Logo} alt="" />
            <h1>Page Not Found (error:404)</h1>
        </div>
    );
}

export default Error404;
