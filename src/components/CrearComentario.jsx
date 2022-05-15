import { useState } from "react";
import '../css/sections/home.css';

function CreateComentario(props) {
	const [ name, setName ] = useState("");
	const [ text, setText ]   = useState("");

	function onCreateComentarioSubmit(e) {
		e.preventDefault();
		
		
		fetch('http://localhost:9001/user/api-post', {
			method: "POST", headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify({
				name, text
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
        <>
        <div className="w-full max-w-xs registro container">
            <h2 className="text-sky-400/100 text-3xl mt-16">Crear un Comentario</h2>
            <form onSubmit={ (e) => onCreateComentarioSubmit(e) } action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre de Usuario
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={ name } onChange={ (e) => setName(e.target.value) } />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Comentario
                </label>
                <textarea value={ text } onChange={ (e) => setText(e.target.value) } className="text-gray-700"></textarea>
                </div>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Comentar
                </button>
            </form>
        </div>
         </>
    );
}

export default CreateComentario;