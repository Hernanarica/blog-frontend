import {getPostById} from "../api/Post.api";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";

function EditPost(props) {
   const navigate = useNavigate();
   
   const [title, setTitle] = useState("");
   const [text, setText] = useState("");
   
   const {id} = useParams();
   
   useEffect(() => {
      getPostById(id).then(res => {
         setTitle(res.title);
         setText(res.text);
      });
   }, [id]);
   
   function updateFormPost(e) {
      e.preventDefault();
      fetch(`http://localhost:9001/user/api-post/${id}`, {
         method: "PUT", headers: {
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
      
      navigate("/panel");
   }
   
   return (
       <section className="registro container">
          <h2 className="registro__h2">
             Editar el post: {title}
          </h2>
          <form onSubmit={(e) => updateFormPost(e)} action="" className="sectionLogin__form">
             <div className="sectionLogin__labels">
                <label htmlFor="text">Titulo</label>
                <input id="text" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
             </div>
             <div className="sectionLogin__labels">
                <label htmlFor="texto">Texto</label>
                <textarea id="texto" value={text} onChange={(e) => setText(e.target.value)}/>
             </div>
             <button className="sectionLogin__btn">Actualizar</button>
          </form>
       </section>
   );
}

export default EditPost;