import "./css/index.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import {Routes, Route, Navigate} from "react-router-dom";


function App() {
	return (
		 <div>
			 <div className="contNav">
				 <NavBar/>
			 </div>
			 <Routes>
				 <Route path="/Login" element={<Login/>} />
				 <Route path="/Register" element={<Register/>} />
				 <Route path="/notfound" element={<h2>Error 404</h2>} />
				 <Route path="*" element={<Navigate to="/notfound"/>} />
			 </Routes>
		 </div>
	);
}

export default App;
