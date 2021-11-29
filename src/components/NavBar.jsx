import logo from '../img/logo.png';
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
						 <a href="/">Home</a>
					 </li>
					 <li>
						 <a href="/login">Login</a>
					 </li>
					 <li>
						 <a href="/Register">Registro</a>
					 </li>
				 </ul>
			 </nav>
		 </header>
	);
}

export default NavBar;