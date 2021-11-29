import "./css/index.css";
import NavBar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx"

function App() {
	return (
		 <div className="contNav">
			 <NavBar/>
			 <div>
				 <Login />
			 </div>

		 </div>
	);
}

export default App;
