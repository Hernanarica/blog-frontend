import '../css/components/login.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/Auth.api";
import AuthContext from "../context/authContext";


function Login() {
	const { dispatch } = useContext(AuthContext);
	
	const [ email, setEmail ]       = useState("");
	const [ password, setPassword ] = useState("");
	
	function onLoginSubmit(e) {
		e.preventDefault();
		
		login(email, password)
			.then(function (res) {
				return res.json();
			})
			.then(function (data) {
				const { token } = data;
				const user      = { ...data.user, token };
				console.log(user);
				
				localStorage.setItem('user', JSON.stringify(user));
				
				dispatch({
					type: 'login',
					payload: user
				});
			})
			.catch(function (err) {
				console.log(err);
			});
	}
	
	return (
		<section className="sectionLogin">
			<h2>Bienvenidos</h2>
			<form onSubmit={ (e) => onLoginSubmit(e) } action="" className="sectionLogin__form">
				<div className="sectionLogin__labels">
					<label htmlFor="">Email</label>
					<input type="email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
				</div>
				<div className="sectionLogin__labels">
					<label htmlFor="">Password</label>
					<input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
				</div>
				<button className="sectionLogin__btn">Ingresar</button>
			</form>
			<p className="sectionLogin__p">No tienes cuenta !! Registrate <Link to="/Register">aqui</Link></p>
		</section>
	);
}

export default Login;