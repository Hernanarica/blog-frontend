import logo from '../img/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuths } from "../context/AuthContextLogin.jsx";
import { useState } from "react";

function NavBar({ isAuth, setAuth, isAdmin, setAdmin }) {
	const { dispatch } = useAuths();
	const navigate = useNavigate();
	
	function handleLogout(e) {
		e.preventDefault();
		
		localStorage.removeItem('user');
		
		dispatch({ type: 'LOGOUT' });
		
		(isAuth) && setAuth(false);
		(isAdmin) && setAdmin(false);
		
		navigate('/');
	};
	
	return (
		<header>
			<Link to="/">
				<h1>
					<img src={ logo } width={ 124 } height={ 47 } alt="logo STACC" />
					My Blog
				</h1>
			</Link>
			<nav>
				<ul>
					{
						(!isAuth && !isAdmin) && (
							<>
								<li><Link to="/login">Login</Link></li>
								<li><Link to="/registrar">Registrar</Link></li>
							</>
						)
					}
					{
						(isAuth || isAdmin) && (
							<>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/contactos">Contactos</Link>
								</li>
							</>
						)
					}
					{
						(isAdmin) && (
							<>
								<li>
									<Link to="/crear-post">Crear post</Link>
								</li>
								<li>
									<Link to="/panel">Panel de control</Link>
								</li>
							</>
						)
					}
					{
						(isAdmin || isAuth) && (
							<li>
								<button onClick={ handleLogout }>Cerrar Sesión</button>
							</li>
						)
					}
				</ul>
			</nav>
		</header>);
}

export default NavBar;