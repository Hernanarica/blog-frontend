import "./css/index.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";

function App() {
	return (
		 <div>
			 <div className="contNav">
				 <NavBar/>
			 </div>
			 <Login/>
		 </div>
	);
}

export default App;
