import '../css/components/login.css'
import {useState} from "react";
import { Link } from "react-router-dom";
import {useAuths} from "../context/AuthContextLogin.jsx";
import * as API from '../api/Auth.api.jsx';


function Login(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {state, dispatch} = useAuths();
    const [validar, setValidar] = useState("");

    const styles = () => {

        let inputEmail = document.getElementById('emails');
        let inputPassword = document.getElementById('passwords');

        (!email) ? inputEmail.style.border = "2px solid red" : inputEmail.style.border = "2px solid green";
        (!password) ? inputPassword.style.border = "2px solid red" : inputPassword.style.border = "2px solid green";
    }
    function onLoginSubmit(e){
        e.preventDefault();

        API.login(email, password)
            .then(function (res){
                return res.json()
            })
            .then(function (data){
                if(!email){
                    setValidar('El email es obligatorio !')
                    return

                }

                if(!password){
                    setValidar('El password es obligatorio !')
                    return
                }

                if (email && password){
                    localStorage.setItem('token', data.token );
                    localStorage.setItem('user', JSON.stringify(data.r));
                    props.onLogin(data.user)
                    dispatch({type: 'LOGIN', payload: data.user});

                }

            })
            .catch(function (err){
                console.log(err)
            })
    }

    return (
        <section className="sectionLogin">
            <h2>Bienvenidos</h2>
            <form onSubmit={(e)=>onLoginSubmit(e)} action="" className="sectionLogin__form">
                <div className="sectionLogin__labels">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} id="emails"
                           onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="sectionLogin__labels">
                    <label htmlFor="">Password</label>

                    <input type="password" value={password} id="passwords"
                           onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={styles} className="sectionLogin__btn">Ingresar</button>
            </form>
            <p id="msg">{validar}</p>
            <p className="sectionLogin__p">No tienes cuenta !! Registrate <Link to="/registrar">aqui</Link></p>
        </section>
    )
}

export default Login

