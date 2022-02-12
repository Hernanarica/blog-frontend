import '../css/components/register.css';
import { useState, useEffect } from "react";
import { getAllPosts, Published, borrarPost } from "../api/Post.api";
import { Link } from "react-router-dom";


function Panel(props) {
	const [ posts, setPosts ] = useState([]);
	
	useEffect(() => {
		getAllPosts().then(posts => {
			setPosts(posts);
		});
	}, []);
	
	function update(id) {
		Published(id).then(() => {
			getAllPosts().then(posts => {
				setPosts(posts);
			});
		});
		//redireccionar al panel
	}
	
	function deletePost(id) {
		borrarPost(id).then(() => {
			getAllPosts().then(posts => {
				setPosts(posts);
			});
		});
		//redireccionar al panel
	}
	
	return (
		<section className="wrapper-panel container">
			<h2 className="panel__h2">
				Panel de control
			</h2>
			<table className="panel__table">
				<thead>
					<tr>
						<th>Título</th>
						<th>Texto</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{ posts.map(post => (
						<tr key={ post._id }>
							<td>{ post.title }</td>
							<td>{ post.text }</td>
							<td>
								<a href="/" className={ post.public ? 'btn btn-ok mb-3' : 'btn btn-habilitar mb-3' }
								   onClick={ () => update(post._id) }>{ post.public ? 'Listo' : 'Habilitar' }</a>
								<Link to={ `/post/edit/${ post._id }` }>
									<button className="btn btn-editar mb-3">Editar</button>
								</Link>
								<a href="/" className="btn btn-eliminar" onClick={ () => deletePost(post._id) }>Borrar</a>
							</td>
						</tr>
					)) }
				</tbody>
			</table>
		</section>);
}

export default Panel;
