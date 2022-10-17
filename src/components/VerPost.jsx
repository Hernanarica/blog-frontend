import '../css/sections/home.css';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getPostById } from "../api/Post.api";
import PreviousPage from "./PreviousPage";

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
		<div className="min-h-screen pt-20">
			<PreviousPage />
			<main className="main-ver-post">
				<section className="ver-post">
					<h2 className="ver-post__h2">{ post.title }</h2>
					<p>{ post.text }</p>
					<p>{ post.created }</p>
				</section>
			</main>
		</div>);
}

export default VerPost;