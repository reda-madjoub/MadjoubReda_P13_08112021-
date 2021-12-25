import { LOGIN, LOGOUT, UPDATE_NAME } from "constant/actions";
const INITIAL_STATE =  {
    firstName : "",
    lastName: "",
    email: "",
    password: "",
    token: "",
    loggedIn: false,
}

function Authentification( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                token: action.token,
                loggedIn: action.logIn,
            }
        }
        case LOGOUT: {
            localStorage.clear()
            return {
                ...state,
                firstName : action.firstName,
                lastName: action.lastName,
                email: action.email,
                password: action.password,
                token: action.token,
                loggedIn: action.loggedIn
            }
        }
        case UPDATE_NAME: {
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
            }
            
        }
        default:
            console.log("Credentials invalid")
            break;
    }
    return state
}
export default Authentification