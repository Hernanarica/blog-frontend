import logotipo from '../img/logo-stacc-white.png';
function NavBar() {
	return (
		 <header>
			 <h1>
				 <img src={ logotipo } width={100} height={50} alt="logo stacc blanco"/>
				 My Blog
			 </h1>
			 <nav>
				 <ul>
					 <li>
						 <a href="#">Home</a>
					 </li>
					 <li>
						 <a href="#">Login</a>
					 </li>
					 <li>
						 <a href="#">Registro</a>
					 </li>
				 </ul>
			 </nav>
		 </header>
	);
}

export default NavBar;