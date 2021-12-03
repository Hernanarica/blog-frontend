import {useUser, UserProvider} from "../context/UsersContextList.jsx";
import * as API from '../api/Auth.api.jsx';
import {useEffect} from "react";
import {getUsers} from "../api/Auth.api.jsx";


function UserList(){
    const {state} = useUser()
    return (
        <ul>
            {state.user.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    )
}

function UsersList(){
    const {dispatch} = useUser()

    useEffect(()=>{
        API.getUsers().then(users => {
            dispatch({type: 'SET_USERS', payload: users})
        })
    }, [])

    return(
        <div>
            <h2>Usuarios</h2>

                <UserList />
        </div>
    )
}
export default UsersList