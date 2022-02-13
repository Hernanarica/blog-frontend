import '../css/sections/home.css';
import '../css/components/post.css';
import React from 'react';
import { Link } from "react-router-dom";
import { getPublished } from '../api/Post.api';
import { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/outline";


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
								<div key={ post._id } className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md flex flex-col gap-2">
									<Link to={ `/post/${ post._id }` }>
										<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{ post.title }</h5>
									</Link>
									<p className="font-normal text-gray-700">{ post.text }</p>
									<time className="text-sm text-gray-500">{ post.created }</time>
									<Link to={ `/post/${ post._id }` }
									      className="inline-flex w-fit items-center gap-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
										<EyeIcon className="h-5" /> Ver más </Link>
								</div>
							)
						) }
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