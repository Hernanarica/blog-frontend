import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Panel from "../components/Panel";
import AuthRoutes from "./AuthRoutes";
import Contactos from "../components/Contactos";
import AdminRoutes from "./AdminRoutes";
import NotFount from "../components/NotFount";
import PublicRoutes from "./PublicRoutes";
import TheHeader from "../components/TheHeader";
import CrearPost from "../components/CrearPost";

function AppRouter() {
	return (
		<>
			{/*@formatter:off*/}
			<Router>
				<TheHeader/>
				<Routes>
					<Route element={ <PublicRoutes />}>
						<Route path="/" element={ <Login /> }/>
						<Route path="/register" element={ <Register /> }/>
					</Route>
					
					<Route element={ <AuthRoutes/>}>
						<Route path="/home" element={ <Home /> }/>
						<Route path="/contact" element={ <Contactos /> }/>
					</Route>
					
					<Route element={ <AdminRoutes/>}>
						<Route path="/panel" element={ <Panel /> }/>
						<Route path="/panel/crear-post" element={ <CrearPost /> }/>
					</Route>
					
					<Route path="*" element={ <NotFount/> }/>
				</Routes>
			</Router>
		</>
		// @formatter:on
	);
}

export default AppRouter;