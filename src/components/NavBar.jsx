import logo from '../img/logo.png';
import { Link } from "react-router-dom";
import {useAuths} from "../context/AuthContextLogin.jsx";
import {useState} from "react";

function NavBar() {
	const {dispatch} = useAuths();
	const [isAuth] = useState(false);
	function AuthDiv(props){
		const {state} = useAuths();
		return state.isAuthenticated ? props.children : null
	}

	function handleLogout(e){
		e.preventDefault();
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		dispatch({type: 'LOGOUT'});
	};

	return (
		 <header>
			 <Link to="/">
				 <h1>
					 <img src={ logo } width={ 124 } height={ 47 } alt="logo STACC"/>
					 My Blog
				 </h1>
			 </Link>
			 <nav>
				 <ul>
					 <li>
						 <Link to="/login">Login</Link>
					 </li>
					 <li>
						 <Link to="/registrar">Registro</Link>
					 </li>
					 <AuthDiv isAuth={isAuth}>
					 <li>
						 <Link to="/">Home</Link>
					 </li>
					 <li>
						 <Link to="/contactos">Contactos</Link>
					 </li>
					 <li>
						 <Link to="/crear-post">Crear post</Link>
					 </li>
					 <li>
						 <Link to="/panel">Panel de control</Link>
					 </li>
					 {/*<li>
						 <Link to="/users">Usuarios</Link>
					 </li>*/}

					 <li>
						 <Link onClick={(e)=>{
							handleLogout(e)}}
							to="#">Cerrar Sesión</Link>
					 </li>
					 </AuthDiv>

				 </ul>
			 </nav>
		 </header>);
}

export default NavBar;