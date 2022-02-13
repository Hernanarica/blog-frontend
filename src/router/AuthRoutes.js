import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from "../context/authContext";

function AuthRoutes() {
	const { user } = useContext(AuthContext);
	console.log(user);
	
	return user._id ? <Outlet /> : <Navigate to="/" />;
}

export default AuthRoutes;