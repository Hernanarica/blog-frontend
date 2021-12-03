import "./css/index.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Contactos from "./components/Contactos.jsx";
import CreatePost from "./components/CrearPost";
import Panel from "./components/Panel";
import VerPost from "./components/VerPost";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAuths} from "./context/AuthContextLogin.jsx";

function Auth(props){
	const {state} = useAuths();
	return state.isAuthenticated ? props.children : <Navigate to="/login" />
}
function AuthDiv(props){
	const {state} = useAuths();
	return state.isAuthenticated ? props.children : null
}
function App() {
	const {state, dispatch} = useAuths();
	const [isAuth, setAuth] = useState(false);
	const navigate = useNavigate();

	useEffect(()=>{
		if (localStorage.getItem('token') && localStorage.getItem('user')){
			const user = JSON.parse(localStorage.getItem('user'));
			dispatch({type: 'LOGIN', payload: {user}});
		}
	},[]);

	useEffect(() => {
		if (state.isAuthenticated) {
			navigate('/');
		}else{
			navigate('/login');
		}
	}, [state]);

	return (
		 <div>
			 {/*// dejo comentado el router AuthDiv para que despues se puede elegir que mostrar y que no sin estar autenticado*/}
			 {/*<AuthDiv isAuth={isAuth}>*/}
			 <div className="contNav">
				 <NavBar/>
			 </div>
		 	{/*</AuthDiv>*/}
			 <Routes>
				 <Route path="/" element={<Auth isAuth={isAuth}><Home/></Auth>}/>
				 <Route path="/post/:id" element={<VerPost/>}/>
				 <Route path="/login" element={<Login onLogin={()=> {setAuth(true); navigate('/')}}/>} />
				 <Route path="/registrar" element={<Register/>} />
				 <Route path="/contactos" element={<Auth isAuth={isAuth}><Contactos/></Auth>} />
				 <Route path="/crear-post" element={<Auth isAuth={isAuth}><CreatePost/></Auth>} />
				 <Route path="/panel" element={<Auth isAuth={isAuth}><Panel/></Auth>} />
				 <Route path="/notfound" element={<h2>Error 404</h2>} />
				 <Route path="*" element={<Navigate to="/notfound"/>} />
			 </Routes>
		 </div>
	);
}

export default App;
