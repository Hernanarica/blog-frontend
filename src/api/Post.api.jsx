import Config from '../config/config';

export async function getPublished() {
	const response = await fetch(`${ Config.api.url }/posts`);
	const post     = await response.json();
	return post;
}

export async function getPostById(id) {
	const response = await fetch(`${ Config.api.url }/post/${ id }`);
	const post     = await response.json();
	return post;
}

export async function getAllPosts() {
	const response = await fetch(`${ Config.api.url }/posts/published`);
	const posts    = await response.json();
	return posts;
}

export async function Published(id) {
	const response = await fetch(`${ Config.api.url }/post/${ id }`, {
		method: 'PATCH'
	});
	const post     = await response.json();
	return post;
}

export async function borrarPost(id) {
	const response = await fetch(`${ Config.api.url }/post/${ id }`, {
		method: 'DELETE'
	});
	const post     = await response.json();
	return post;
}