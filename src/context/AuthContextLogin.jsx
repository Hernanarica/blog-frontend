import {createContext, useContext, useReducer} from "react";

const AuthContextLogin = createContext();

function AuthReducer(state, action){
    switch (action.type){
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default: return state;
    }
}

// manejamos el estado y el contexto con context
export function AuthProvider({children}){
    const [state, dispatch] = useReducer(AuthReducer, {
        isAuthenticated: false,
        user: null,
    });

    return(
        <AuthContextLogin.Provider value={{state, dispatch}}>
            {children}
        </AuthContextLogin.Provider>
    )
}

export function useAuths (){
    return  useContext(AuthContextLogin);

}