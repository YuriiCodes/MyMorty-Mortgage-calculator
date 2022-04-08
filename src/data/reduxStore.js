import {combineReducers, createStore} from "redux";
import banksReducer from "./banksReducer";
import mortageCalculatorReducer from "./mortageCalculatorReducer";
let reducers = combineReducers({
    banksInfo: banksReducer,
    mortageCalculator: mortageCalculatorReducer
});

let store = createStore(reducers);
window.store = store;
export default store
