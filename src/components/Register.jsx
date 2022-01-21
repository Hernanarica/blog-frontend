import '../css/components/register.css';
import {useState} from "react";
import { Link } from "react-router-dom";

function Register(props) {
	const [ name, setName ]         = useState("");
	const [ lastname, setLastname ] = useState("");
	const [ email, setEmail ]       = useState("");
	const [ password, setPassword ] = useState("");
	const [validar, setValidar] = useState("");



	const styles = () => {
		let inputName = document.getElementById('name');
		let inputLastName = document.getElementById('lastName');
		let inputEmail = document.getElementById('email');
		let inputPassword = document.getElementById('password');


		(!name) ? inputName.style.border = "2px solid red" : inputName.style.border = "2px solid green";
		(!lastname) ? inputLastName.style.border = "2px solid red" : inputLastName.style.border = "2px solid green";
		(!email) ? inputEmail.style.border = "2px solid red" : inputEmail.style.border = "2px solid green";
		(!password) ? inputPassword.style.border = "2px solid red" : inputPassword.style.border = "2px solid green";
	}

	function onRegisterSubmit(e) {
		e.preventDefault();


		fetch('http://localhost:9001/user/api-user', {
			method: "POST", headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name, lastname, email, password, role: 'user'
			})
		})
			 .then(function (res) {
				 return res.json();
			 })
			 .then(function (data) {
				 if(!name){
					 setValidar('El nombre es obligatorio !');
					 return
				 }

				 if(!lastname){
					 setValidar('El apellido es obligatorio !');
					 return
				 }

				 if(!email){
					 setValidar('El email es obligatorio !');
					 return
				 }

				 if(!password){
					 setValidar('El password es obligatorio !');
					 return
				 }
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
					 <input id="name"
						 	type="text"
							value={ name }
							onChange={ (e) => setName(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Apellido</label>
					 <input id="lastName"
							type="text"
							value={ lastname }
							onChange={ (e) => setLastname(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Email</label>
					 <input id="email"
							type="email"
							value={ email }
							onChange={ (e) => setEmail(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Password</label>
					 <input id="password"
						 	type="password"
						 	value={ password }
						 	onChange={ (e) => setPassword(e.target.value) }/>
				 </div>
				 <button onClick={styles}  className="sectionLogin__btn" >Registrar</button>
			 </form>
			 <p id="msg">{validar}</p>
			 <p className="sectionLogin__p">Usuarios registrados ingresar <Link to="/login">aqui</Link></p>
		 </section>);
}

export default Register;