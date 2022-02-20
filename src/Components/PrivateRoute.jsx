import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { checkToken } from '../Apis/userAPI';
const PrivateRoute = ({ component }) => {
    const [token] = useState(() => localStorage.getItem('token'));
    const [isLogiIned, setIsLogined] = useState(false);
    const navigate = useNavigate();
    useEffect(async () => {
        if (!token) setIsLogined(false);
        else
            await checkToken()
                .then(rs => {
                    console.log(rs);
                    if (rs.status === 500)
                    setIsLogined (false);  
                    else setIsLogined (true);   
                })
                .catch(err => {
                    setIsLogined(false);
                });

    }, [token]);
    console.log(isLogiIned)
    return (
        isLogiIned  ?
            <>{component}</> :
            <Navigate replace to='/login' />
    );
};

export default PrivateRoute;
