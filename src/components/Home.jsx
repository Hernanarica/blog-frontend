import '../css/sections/home.css';
import React from 'react';
import { useEffect, useState } from "react";

function Home() {
	
	const [ posts, setPosts ] = useState([]);
	
	useEffect(() => {
		fetchData();
	}, []);
	
	const fetchData = async () => {
		const data  = await fetch('http://localhost:80/user/api-posts-published');
		const posts = await data.json();
		console.log(posts);
		setPosts(posts);
	};
	
	return (<div className="wrapper-home">
		<main className="main-home">
			<section className="home">
				<h1>Todos los posts</h1>
				<div className="posts">
					{ posts.map(post => (<article key={ post._id } className="post">
						<h2>{ post.title }</h2>
						<p>{ post.text }</p>
						<p>{ post.created }</p>
					</article>)) }
				</div>
			</section>
		</main>
		<aside className="aside-home">
			<h2>Comidas sin Tacc</h2>
			<hr/>
			<div className="publicidad">
				<img src="https://lasparchitas.com.ar/wp-content/uploads/2021/05/vegan-burguer-calabaza.jpg" alt="hamburguesa sin tacc"/>
			</div>
		</aside>
	</div>);
}

export default Home;