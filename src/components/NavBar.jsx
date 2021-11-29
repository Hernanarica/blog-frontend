import logo from '../img/logo.png';
import {Link} from "react-router-dom";

function NavBar() {
	return (
		 <header>
			 <h1>
				 <img src={ logo } width={124.5} height={47} alt="logo STACC"/>
				 My Blog
			 </h1>
			 <nav>
				 <ul>
					 <li>
						 <Link to="/">Home</Link>
					 </li>
					 <li>
						 <Link to="/login">Login</Link>
					 </li>
					 <li>
						 <Link to="/Register">Registro</Link>
					 </li>
				 </ul>
			 </nav>
		 </header>
	);
}

export default NavBar;