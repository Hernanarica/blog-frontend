import "./css/index.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Contactos from "./components/Contactos.jsx";
import CreatePost from "./components/CrearPost";
import Panel from "./components/Panel";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";

function Auth(props){
	return props.isAuth ? props.children : <Navigate to="/login" />
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
				 <Route path="/login" element={<Login onLogin={()=> {setAuth(true); navigate('/')}}/>} />
				 <Route path="/registrar" element={<Register/>} />
				 <Route path="/contactos" element={<Auth isAuth={isAuth}><Contactos/></Auth>} />
				 <Route path="/crear-post" element={<CreatePost/>} />
				 <Route path="/panel" element={<Panel/>} />
				 <Route path="/notfound" element={<h2>Error 404</h2>} />
				 <Route path="*" element={<Navigate to="/notfound"/>} />
			 </Routes>
		 </div>
	);
}

export default App;
