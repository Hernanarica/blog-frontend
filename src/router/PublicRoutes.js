import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from "../context/authContext";

function PublicRoutes() {
	const { user } = useContext(AuthContext);
	
	return (user?._id) ? <Navigate to="/home" /> : <Outlet />;
}

export default PublicRoutes;