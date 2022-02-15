import API from "../config/config";

export async function getPublished() {
	const response = await fetch(`${ API.url }/posts/published`);
	return await response.json();
}

export async function getPostById(id) {
	const response = await fetch(`${ API.url }/post/${ id }`);
	return await response.json();
}

export async function getAllPosts() {
	const response = await fetch(`${ API.url }/posts`);
	return await response.json();
}

export async function Published(id) {
	const response = await fetch(`${ API.url }/post/${ id }`, {
		method: 'PATCH'
	});
	return await response.json();
}

export async function borrarPost(id) {
	const response = await fetch(`${ API.url }/post/${ id }`, {
		method: 'DELETE'
	});
	return await response.json();
}