import '../css/sections/home.css';
import plato from '../img/plato.png';
import {Link} from "react-router-dom";
import React from 'react';
import {getAllPosts} from '../api/Post.api';

import {useEffect, useState, createContext, useContext} from "react";


function Home() {
   
   const [posts, setPosts] = useState([]);
   
   useEffect(() => {
      getAllPosts().then(posts => {
         setPosts(posts);
      });
   }, []);
   
   
   return (
       <div className="container wrapper-home">
          <main className="main-home">
             <div className="div-home">
             <img src={ plato } alt="imagen de plato de fideos"/>
                <h1>¿Te interesan las recetas sin gluten? Estás en el lugar perfecto :)</h1>
             </div>
             <section className="home">
                <h2>Post</h2>
                <div className="posts">
                   {posts.map(post => (
                       <article key={post._id} className="post">
                          <Link to={`/post/${post._id}`}><h3>{post.title}</h3></Link>
                          <p className="post-texto">{post.text}</p>
                          <p>{post.created}</p>
                       </article>))}
                </div>
             </section>
          </main>
       </div>
   );
}

export default Home;