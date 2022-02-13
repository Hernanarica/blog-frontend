import '../css/components/register.css';
import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
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
	}

	return (
		 <section className="registro container">
			 <h2 className="registro__h2">
				 Registro de usuarios
			 </h2>
			 <form onSubmit={ (e) => onRegisterSubmit(e) } action="" className="sectionLogin__form">
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Nombre</label>
					 <input type="text" value={ name } onChange={ (e) => setName(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Apellido</label>
					 <input type="text" value={ lastname } onChange={ (e) => setLastname(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Email</label>
					 <input type="email" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Password</label>
					 <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
				 </div>
				 <button className="sectionLogin__btn">Registrar</button>
			 </form>
			 <p className="sectionLogin__p">Usuarios registrados ingresar <Link to="/">aqui</Link></p>
		 </section>);
}

export default Register;