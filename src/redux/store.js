import { createStore, combineReducers } from 'redux';
import Reducer from 'redux/Reducers/Reducer';

// nomage conventionnel "rootReducer"
// combineReducers permet de mettre dans notre store plusieurs reducers
const rootReducer = combineReducers({
    Reducer,
})

const store = createStore(rootReducer)

export default store