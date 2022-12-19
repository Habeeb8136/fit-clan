import React from 'react'
import { UserAuth } from './src/AuthContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({ children }) {

    const { user } = UserAuth();

    if (!user) {
        return <Navigate to='/' />
    };
    return children;
};
