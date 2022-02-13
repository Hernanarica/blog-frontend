import '../css/sections/home.css';
import React from 'react';
import { Link } from "react-router-dom";
import { getPublished } from '../api/Post.api';
import { useEffect, useState } from "react";


function Home() {
	
	const [ posts, setPosts ] = useState([]);
	
	useEffect(() => {
		getPublished().then(posts => {
			setPosts(posts);
		});
	}, []);
	
	
	return (
		<div className="container wrapper-home">
			<main className="main-home">
				<section className="home">
					<h2>Todos los posts</h2>
					<div className="posts">
						{ posts.map(post => (
							<article key={ post._id } className="post">
								<Link to={ `/post/${ post._id }` }>
									<h2>{ post.title }</h2>
								</Link>
								<p>{ post.text }</p>
								<p>{ post.created }</p>
							</article>)) }
					</div>
				</section>
			</main>
			<aside className="aside-home">
				<h2>Comidas sin Tacc</h2>
				<hr />
				<div className="publicidad">
					<img src="https://lasparchitas.com.ar/wp-content/uploads/2021/05/vegan-burguer-calabaza.jpg" alt="hamburguesa sin tacc" />
				</div>
			</aside>
		</div>);
}

export default Home;