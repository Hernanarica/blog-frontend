import API from "../config/config";

export async function getPublishedComentarios() {
	const response = await fetch(`${ API.url }/comentarios`);
	return await response.json();
}

export async function getComentariosById(id) {
	const response = await fetch(`${ API.url }/comentarios/${ id }`);
	return await response.json();
}

export async function getAllComentarios() {
	const response = await fetch(`${ API.url }/comentarios/published`);
	return await response.json();
}

export async function PublishedComentarios(id) {
	const response = await fetch(`${ API.url }/comentarios/${ id }`, {
		method: 'PATCH'
	});
	return await response.json();
}

export async function borrarComentario(id) {
	const response = await fetch(`${ API.url }/comentarios/${ id }`, {
		method: 'DELETE'
	});
	return await response.json();
}