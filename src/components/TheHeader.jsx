import logo from '../img/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";

function TheHeader() {
	const { user, dispatch } = useContext(AuthContext);
	const navigate           = useNavigate();
	
	const handleLogout = () => {
		dispatch({
			type: 'logout',
			payload: {}
		});
		
		navigate('/');
	};
	
	return (
		<header>
			<h1>
				<img src={ logo } width="124" height="47" alt="logo STACC" />
				My Blog
			</h1>
			<nav>
				<ul>
					{
						(!user?.role) && (
							<>
								<li>
									<Link to="/">Login</Link>
								</li>
								<li>
									<Link to="/register">Registrar</Link>
								</li>
							</>
						)
					}
					{
						(user?.role === 'user' || user.role === 'admin') && (
							<>
								<li>
									<Link to="/home">Home</Link>
								</li>
								<li>
									<Link to="/contact">Contacto</Link>
								</li>
							</>
						)
					}
					{
						(user?.role === 'admin') && (
							<>
								<li>
									<Link to="/panel/crear-post">Crear Post</Link>
								</li>
							
								<li>
									<Link to="/panel">Panel de control</Link>
								</li>
							</>
						)
					}
					{
						(user?.role === 'user' || user.role === 'admin') && (
							<>
								<li>
									<button onClick={ handleLogout }>Cerra sesión</button>
								</li>
							</>
						)
					}
				</ul>
			</nav>
		</header>
	);
}

export default TheHeader;