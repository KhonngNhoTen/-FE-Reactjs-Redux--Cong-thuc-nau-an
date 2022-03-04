import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ component }) => {
    const [isLogined] = useState(localStorage.getItem('token') !== null);
    return (
        isLogined  ? <>{component}</> : <Navigate replace to='/login' />
    );
};

export default PrivateRoute;
