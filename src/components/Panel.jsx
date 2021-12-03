import '../css/components/register.css';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getAllPosts, getPublished,} from "../api/Post.api";
import Register from "./Register";

function Panel(props) {
   const [posts, setPosts] = useState([]);
   
   useEffect(() => {
      getAllPosts().then(posts => {
         setPosts(posts);
      });
   }, []);
   
   /* funcion que habilite el estado del post */
   
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
             {posts.map(post => (
                 <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.text}</td>
                    <td>
                       <a href="#" className="btn btn-habilitar mb-3">Habilitar</a>
                       <a href="#" className="btn btn-editar mb-3">Editar</a>
                       <a href="#" className="btn btn-eliminar">Eliminar</a>
                    </td>
                 </tr>
             ))}
             </tbody>
          </table>
       </section>);
}

export default Panel;
