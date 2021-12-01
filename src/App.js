import "./css/index.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Contactos from "./components/Contactos.jsx";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";

function Auth(props){
	return props.isAuth ? props.children : <Navigate to="/Login" />
}
function AuthDiv(props){
	return props.isAuth ? props.children : null
}
function App() {

	const [isAuth, setAuth] = useState(false);
	const navigate = useNavigate();

	return (
		 <div>
			 {/*// dejo comentado el router AuthDiv para que despues se puede elegir que mostrar y que no sin estar autenticado*/}
			 {/*<AuthDiv isAuth={isAuth}>*/}
			 <div className="contNav">
				 <NavBar/>
			 </div>
		 	{/*</AuthDiv>*/}
			 <Routes>
				 <Route path="/" element={<Home/>}/>
				 <Route path="/Login" element={<Login onLogin={()=> {setAuth(true); navigate('/')}}/>} />
				 <Route path="/Register" element={<Register/>} />
				 <Route path="/Contactos" element={<Auth isAuth={isAuth}><Contactos/></Auth>} />
				 <Route path="/notfound" element={<h2>Error 404</h2>} />
				 <Route path="*" element={<Navigate to="/notfound"/>} />
			 </Routes>
		 </div>
	);
}

export default App;
