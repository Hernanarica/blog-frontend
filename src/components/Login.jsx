import '../css/components/login.css'
import {useState} from "react";

function Login(props){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onLoginSubmit(e){
        e.preventDefault();


        fetch('http://localhost:80/user/login',{
            method: "POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email, password
            })
        })
        .then(function (res){
            return res.json()
        })
        .then(function (data){
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
        </section>
    )
}

export default Login