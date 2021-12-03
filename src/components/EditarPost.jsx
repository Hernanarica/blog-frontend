import { useState } from "react";

function EditarPost(props) {
	const [ title, setTitle ] = useState("");
	const [ text, setText ]   = useState("");
	
	function onEditarPost(e) {
		e.preventDefault();
		
		
		fetch('http://localhost:9001/user/api-post', {
			method: "PATCH", headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify({
				title, text
			})
		})
			 .then(function (res) {
				 return res.json();
			 })
			 .then(function (data) {
				 console.log(data);
			 })
			 .catch(function (err) {
				 console.log(err);
			 });
	}
	
	return (
		 <section className="registro container">
			 <h2 className="registro__h2">
				 Editar un Post
			 </h2>
			 <form onSubmit={ (e) => onEditarPost(e) } action="" className="sectionLogin__form">
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Titulo</label>
					 <input type="text" value={ title } onChange={ (e) => setTitle(e.target.value) }/>
				 </div>
				 <div className="sectionLogin__labels">
					 <label htmlFor="">Texto</label>
					 <textarea value={ text } onChange={ (e) => setText(e.target.value) }></textarea>
				 </div>
				 <button className="sectionLogin__btn">Crear</button>
			 </form>
		 </section>);
}

export default EditarPost;