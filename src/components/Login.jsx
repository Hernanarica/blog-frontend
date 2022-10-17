import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/Auth.api";
import AuthContext from "../context/authContext";
import { KeyIcon, MailIcon } from "@heroicons/react/outline";


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
		<section className="min-h-screen flex flex-col justify-center items-center space-y-2">
			<form onSubmit={ (e) => onLoginSubmit(e) } action="#" className="max-w-xl w-full flex flex-col gap-3">
				<label htmlFor="email" className="sr-only">Your Email</label>
				<div className="relative mt-1">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-600">
						<MailIcon className="h-5"/>
					</div>
					<input type="email" id="email"
					       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
					       placeholder="name@gmail.com"
					       value={ email }
					       onChange={ (e) => setEmail(e.target.value) }
					/>
				</div>
				<label htmlFor="password" className="sr-only">Your Password</label>
				<div className="relative mt-1">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-600">
						<KeyIcon className="h-5"/>
					</div>
					<input type="password" id="password"
					       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
					       placeholder="name@flowbite.com"
					       value={ password }
					       onChange={ (e) => setPassword(e.target.value) }
					/>
				</div>
				<button type="submit"
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
				</button>
			</form>
			<p className="text-gray-500">¿No tienes cuenta?<Link to="/Register" className="text-blue-600"> Registrate aquí</Link></p>
		</section>
	);
}

export default Login;