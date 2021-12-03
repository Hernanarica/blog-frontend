import '../css/components/register.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Register(props) {
   const navigate = useNavigate();
	const [ name, setName ]         = useState("");
	const [ lastname, setLastname ] = useState("");
	const [ email, setEmail ]       = useState("");
	const [ password, setPassword ] = useState("");

	function onRegisterSubmit(e) {
		e.preventDefault();


		fetch('http://localhost:9001/user/api-user', {
			method: "POST", headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify({
				name, lastname, email, password, role: 'user'
			})
		})
			 .then(function (res) {
				 return res.json();
			 })
			 .then(function (data) {
				 console.log(data);
			 })
			 .catch(function (err) {
				 console.log(err);
			 });
      navigate('/login');
	}

	return (
		 <section className="registro container">
			 <h2 className="registro__h2">
				 Registro de usuarios
			 </h2>
			 <form onSubmit={ (e) => onRegisterSubmit(e) } action="" className="sectionLogin__form">
				 <div className="sectionLogin__labels">
					 <label htmlFor="name">Nombre</label>
					 <input type="text" id="name" value={ name } onChange={ (e) => setName(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="lastname">Apellido</label>
					 <input type="text" id="lastname" value={ lastname } onChange={ (e) => setLastname(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="email">Email</label>
					 <input type="email" id="email" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="password">Password</label>
					 <input type="password" id="password" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
				 </div>
				 <button className="sectionLogin__btn">Registrar</button>
			 </form>
			 <p className="sectionLogin__p">Usuarios registrados ingresar <Link to="/login">aqui</Link></p>
		 </section>);
}

export default Register;