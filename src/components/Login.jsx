import '../css/components/login.css'
import {useState} from "react";
import { Link } from "react-router-dom";
import {useAuths} from "../context/AuthContextLogin.jsx";
import * as API from '../api/Auth.api.jsx';


function Login(props){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {state, dispatch} = useAuths()
    function onLoginSubmit(e){
        e.preventDefault();


        API.login(email, password)
            .then(function (res){
                return res.json()
            })
            .then(function (data){

                localStorage.setItem('token', data.token );
                localStorage.setItem('user', JSON.stringify(data.r));
                props.onLogin(data.user)
                dispatch({type: 'LOGIN', payload: data.user})

                console.log(data)

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
                    <input type="email" value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="sectionLogin__labels">
                    <label htmlFor="">Password</label>
                    <input type="password" value={password}
                       onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="sectionLogin__btn">Ingresar</button>
            </form>

            <p className="sectionLogin__p">No tienes cuenta !! Registrate <Link to="/Register">aqui</Link></p>
        </section>
    )
}

export default Login