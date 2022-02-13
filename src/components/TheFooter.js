import React from 'react';
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function TheFooter() {
	return (
		<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
			<div className="sm:flex sm:items-center sm:justify-between">
				<Link to="/" className="flex items-center mb-4 sm:mb-0">
					<img src={ logo } width="124" height="47" alt="logo STACC" />
				</Link>
				<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
					<li>
						<Link to="/" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</Link>
					</li>
					<li>
						<Link to="/" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</Link>
					</li>
					<li>
						<Link to="/" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</Link>
					</li>
					<li>
						<Link to="/" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</Link>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" className="hover:underline">STACC™</a>. Todos los
				derechos reservados. </span>
		</footer>
	);
}

export default TheFooter;