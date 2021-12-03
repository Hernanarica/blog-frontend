import Config from '../config/config';

export async function getPublished() {
   const response = await fetch(`${Config.api.url}/api-posts-published`);
   const post = await response.json();
   return post;
}

export async function getPostById(id) {
   const response = await fetch(`${Config.api.url}/api-post/${id}`);
   const post = await response.json();
   return post;
}
export async function getAllPosts() {
   const response = await fetch(`${Config.api.url}/api-posts`);
   const posts = await response.json();
   return posts;
}

export default {
   getPublished,
   getPostById,
   getAllPosts
};