import { createStore, combineReducers } from 'redux';
import Authentification from 'redux/Reducers/Authentification';

// nomage conventionnel "rootReducer"
// combineReducers permet de mettre dans notre store plusieurs reducers
const rootReducer = combineReducers({
    Authentification,
})

const store = createStore(rootReducer)

export default store