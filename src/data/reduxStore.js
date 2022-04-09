import {combineReducers, createStore} from "redux";
import banksReducer from "./banksReducer";
import mortgageCalculatorReducer from "./mortgageCalculatorReducer";
let reducers = combineReducers({
    banksInfo: banksReducer,
    mortageCalculator: mortgageCalculatorReducer
});

let store = createStore(reducers);
window.store = store;
export default store
