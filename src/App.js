import "./css/index.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import {Routes, Route} from "react-router-dom";


function App() {
	return (
		 <div>
			 <div className="contNav">
				 <NavBar/>
			 </div>
			 <Routes>
                 <Route path="/" element={<Home/>}/>
				 <Route path="/Login" element={<Login/>} />
				 <Route path="/Register" element={<Register/>} />
			 </Routes>
		 </div>
	);
}

export default App;
