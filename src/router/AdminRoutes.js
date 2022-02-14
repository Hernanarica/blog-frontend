import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from "../context/authContext";

function AdminRoutes() {
	const { user } = useContext(AuthContext);
	
	return (user.role === 'admin' && user._id) ? <Outlet /> : <Navigate to="home" />;
}

export default AdminRoutes;