import { createStore } from "redux";
import rootReducers from './rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const initalValue = {};
const store = createStore(
    rootReducers,
    initalValue,
    composeWithDevTools(thunk)  
);


export default store;