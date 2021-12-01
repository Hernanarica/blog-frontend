import logo from '../img/logo.png';
import { Link } from "react-router-dom";

function NavBar() {
	
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
						 <Link to="/">Home</Link>
					 </li>
					 <li>
						 <Link to="/login">Login</Link>
					 </li>
					 <li>
						 <Link to="/registrar">Registro</Link>
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
				 </ul>
			 </nav>
		 </header>);
}

export default NavBar;