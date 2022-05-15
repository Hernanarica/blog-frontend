import '../css/sections/home.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../api/Post.api";
import { comment } from 'postcss';
import VerComentario from './VerComentario';

function VerPost() {
	const { id }            = useParams();
	const [ post, setPost ] = useState([]);
	
	useEffect(() => {
		getPostById(id).then(post => {
			setPost(post);
			console.log(post);
		});
	}, []);
	
	return (
		<>
		<div className="container wrapper-home mt-16">
			<main className="main-ver-post">
				<section className="ver-post">
					<h2 className="ver-post__h2">{ post.title }</h2>
					<p className='text-sky-400/100'>{ post.text }</p>
					<p>{ post.created }</p>
				</section>
				<VerComentario />
				<Link to="/comentario/crear-comentario" className='inline-flex w-fit items-center gap-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'>Agregar comentario</Link>
			</main>
			<aside className="aside-ver-post">
				<h2>Comidas sin Tacc</h2>
				<hr />
				<div className="publicidad">
					<img src="https://lasparchitas.com.ar/wp-content/uploads/2021/05/vegan-burguer-calabaza.jpg" alt="hamburguesa sin tacc" />
				</div>
			</aside>
		</div>
		</>);
}

export default VerPost;