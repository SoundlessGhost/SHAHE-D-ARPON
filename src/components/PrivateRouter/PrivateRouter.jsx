/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import './PrivateRouter.css'
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;