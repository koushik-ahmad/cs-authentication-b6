import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation;

    if (!user) {
        return <Navigate to="/login" state={{ form: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;