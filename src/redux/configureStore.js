import { combineReducers, compose, createStore } from "redux";
import counterReducer from "./reducers/counter";

const reducers = combineReducers ({
    counterReducer: counterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    reducers,
    composeEnhancers()
)



export default store