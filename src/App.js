import "./css/index.css";
import AppRouter from "./router/AppRouter";
import AuthContext from "./context/authContext";
import { useEffect, useReducer } from "react";
import authReducer from "./reducers/authReducer";

const init = () => {
	return JSON.parse(localStorage.getItem('user')) || {};
};

function App() {
	const [ user, dispatch ] = useReducer(authReducer, {}, init);
	
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [ user ]);
	
	return (
		// @formatter:off
		<AuthContext.Provider value={ { user, dispatch} }>
			<AppRouter />
		</AuthContext.Provider>
		// @formatter:on
	);
}

export default App;
