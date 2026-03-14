import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        if (payload.exp * 1000 < Date.now()) {
            localStorage.removeItem("token");
            return false;
        }
        return true;
    } catch {
        localStorage.removeItem("token");
        return false;
    }
}

const ProctedRoutes = ({ children }) => {
    const [isAuthenticated] = useState(checkAuth);

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return children;
}

export default ProctedRoutes
