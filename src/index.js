import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContextLogin.jsx";

ReactDOM.render(
	// @formatter:off
      <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
      </BrowserRouter>,
    // @formatter:on
	document.getElementById('root')
);