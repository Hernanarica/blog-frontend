import '../css/components/register.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Panel(props) {
	const [ posts, setPosts ] = useState([]);
	
	useEffect(() => {
		getPost();
	}, []);
	
	
	function getPost() {
		fetch('http://localhost/user/api-posts')
			 .then(function (res) {
				 return res.json();
			 })
			 .then(function (data) {
				 console.log(data.msg);
				 setPosts(data.msg);
			 })
			 .catch(function (err) {
				 console.log(err);
			 });
	}
	
	return (
		 <section className="registro container">
			 <h2 className="registro__h2">
				 Panel de control
			 </h2>
			 <table>
				 <thead>
					 <tr>
						 <th>ID</th>
						 <th>Título</th>
						 <th>Texto</th>
						 <th>Acciones</th>
					 </tr>
				 </thead>
				 <tbody>
					 { posts.map(post => (
						  <tr key={ post._id }>
							  <td>{ post._id }</td>
							  <td>{ post.title }</td>
							  <td>{ post.text }</td>
							  <td>
								  <a href="#">Habilitar</a>
								  <a href="#">Editar</a>
								  <a href="#">Eliminar</a>
							  </td>
						  </tr>
					 )) }
				 </tbody>
			 </table>
		 </section>);
}

export default Panel;