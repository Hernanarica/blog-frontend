import {createContext, useReducer, useContext} from "react";

const UsersContextList = createContext();

function UserReduce(state, action){
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export function UserProvider({children}){
    const [state, dispatch] = useReducer(UserReduce,{
        user: []
    });

    return (
        <UsersContextList.Provider value={{state, dispatch}}>
            {children}
        </UsersContextList.Provider>
    );
}

export function useUser(){
    return useContext(UsersContextList);
}