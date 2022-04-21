import {applyMiddleware, combineReducers, createStore} from "redux";
import banksReducer from "./banksReducer";
import mortgageCalculatorReducer from "./mortgageCalculatorReducer";
import  thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    banksInfo: banksReducer,
    mortageCalculator: mortgageCalculatorReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store
