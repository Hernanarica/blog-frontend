import '../css/components/register.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyIcon, MailIcon, UserIcon } from "@heroicons/react/outline";

function Register(props) {
	const [ name, setName ]         = useState("");
	const [ lastname, setLastname ] = useState("");
	const [ email, setEmail ]       = useState("");
	const [ password, setPassword ] = useState("");
	
	function onRegisterSubmit(e) {
		e.preventDefault();
		
		
		fetch('http://localhost:9001/api/user/create', {
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
		<section className="min-h-screen flex flex-col justify-center items-center space-y-2">
			<form onSubmit={ (e) => onRegisterSubmit(e) } action="#" className="max-w-xl w-full flex flex-col gap-3">
				<label htmlFor="name" className="sr-only">Your Name</label>
				<div className="relative mt-1">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-600">
						<UserIcon className="h-5" />
					</div>
					<input type="text" autoComplete="off" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
					       placeholder="Ingresa tu nombre" value={ name } onChange={ (e) => setName(e.target.value) } />
				</div>
				<label htmlFor="lastiname" className="sr-only">Your Lastname</label>
				<div className="relative mt-1">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-600">
						<UserIcon className="h-5" />
					</div>
					<input type="text" autoComplete="off" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
					       placeholder="Ingresa tu apellido" value={ lastname } onChange={ (e) => setLastname(e.target.value) } />
				</div>
				<label htmlFor="email" className="sr-only">Your Email</label>
				<div className="relative mt-1">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-600">
						<MailIcon className="h-5" />
					</div>
					<input type="email" autoComplete="off" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
					       placeholder="name@gmail.com" value={ email } onChange={ (e) => setEmail(e.target.value) } />
				</div>
				<label htmlFor="password" className="sr-only">Your Password</label>
				<div className="relative mt-1">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-600">
						<KeyIcon className="h-5" />
					</div>
					<input type="password" autoComplete="off" id="password"
					       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
					       placeholder="name@flowbite.com" value={ password } onChange={ (e) => setPassword(e.target.value) } />
				</div>
				<button type="submit"
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Registrar
				</button>
			</form>
			<p className="text-gray-500">¿Ya tenés una cuenta?<Link to="/" className="text-blue-600"> Inicia sesión</Link></p>
		</section>
		// <section className="registro container">
		//  <h2 className="registro__h2">
		// 	 Registro de usuarios
		//  </h2>
		//  <form onSubmit={ (e) => onRegisterSubmit(e) } action="" className="sectionLogin__form">
		// 	 <div className="sectionLogin__labels">
		// 		 <label htmlFor="">Nombre</label>
		// 		 <input type="text" value={ name } onChange={ (e) => setName(e.target.value) }/>
		// 	 </div>
		// 	 <div className="sectionLogin__labels">
		// 		 <label htmlFor="">Apellido</label>
		// 		 <input type="text" value={ lastname } onChange={ (e) => setLastname(e.target.value) }/>
		// 	 </div>
		// 	 <div className="sectionLogin__labels">
		// 		 <label htmlFor="">Email</label>
		// 		 <input type="email" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
		// 	 </div>
		// 	 <div className="sectionLogin__labels">
		// 		 <label htmlFor="">Password</label>
		// 		 <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
		// 	 </div>
		// 	 <button className="sectionLogin__btn">Registrar</button>
		//  </form>
		//  <p className="sectionLogin__p">Usuarios registrados ingresar <Link to="/">aqui</Link></p>
		// </section>
	);
}

export default Register;