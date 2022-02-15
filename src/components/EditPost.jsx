import { getPostById } from "../api/Post.api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PencilAltIcon } from "@heroicons/react/outline";
import PreviousPage from "./PreviousPage";

function EditPost() {
	const [ title, setTitle ] = useState("");
	const [ text, setText ]   = useState("");
	const navigate            = useNavigate();
	const { id }              = useParams();
	
	useEffect(() => {
		getPostById(id).then(res => {
			setTitle(res.title);
			setText(res.text);
		});
	}, [ id ]);
	
	function updateFormPost(e) {
		e.preventDefault();
		fetch(`http://localhost:9001/api/post/${ id }`, {
			method: "PUT", headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify({
				title, text
			})
		})
			.then(function (res) {
				return res.json();
			})
			.then(function (data) {
				navigate('/panel');
			})
			.catch(function (err) {
				console.log(err);
			});
		
	}
	
	return (
		<section className="min-h-screen pt-20 flex flex-col justify-center items-center relative">
			<PreviousPage />
			<h2 className="text-gray-800 text-2xl">Editar el post: { title }</h2>
			<form onSubmit={ (e) => updateFormPost(e) } action="" className="max-w-xl w-full">
				<div className="mb-6">
					<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Título</label>
					<input type="text" id="title" value={ title } onChange={ (e) => setTitle(e.target.value) }
					       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					       required />
				</div>
				<label htmlFor="texto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Texto</label>
				<textarea id="texto" rows="4" value={ text } onChange={ (e) => setText(e.target.value) }
				          className="block p-2.5 w-full mb-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
				          placeholder="Ingresa el texto...">
               </textarea>
				<button type="submit"
				        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2">
					<PencilAltIcon className="h-5" /> Editar
				</button>
			</form>
		</section>
	);
}

export default EditPost;