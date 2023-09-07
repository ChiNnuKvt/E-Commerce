import {combineReducers,applyMiddleware} from "redux"
import { createStore } from "redux";
// const {createStore} =require("redux");
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productListReducer } from "./Reducers/ProductReducers";

const reducer=combineReducers({
    productList:productListReducer
})

const initialState = {}

const middleware=[thunk];

const store =createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
