import '../css/sections/home.css';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getPostById } from "../api/Post.api";

function VerPost() {
	
	const { id } = useParams();
	
	const [ post, setPost ] = useState([]);
	
	// obtener por la informacion del post por medio del id
	useEffect(() => {
		getPostById(id).then(post => {
			setPost(post);
			console.log(post);
		});
	}, []);
	
	return (
		<div className="container wrapper-home">
			<main className="main-ver-post">
				<section className="ver-post">
					<h2 className="ver-post__h2">{ post.title }</h2>
					<p>{ post.text }</p>
					<p>{ post.created }</p>
				</section>
			</main>
			<aside className="aside-ver-post">
				<h2>Comidas sin Tacc</h2>
				<hr />
				<div className="publicidad">
					<img src="https://lasparchitas.com.ar/wp-content/uploads/2021/05/vegan-burguer-calabaza.jpg" alt="hamburguesa sin tacc" />
				</div>
			</aside>
		</div>);
}

export default VerPost;