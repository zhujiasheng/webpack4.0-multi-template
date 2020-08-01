import * as fp from "redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { baseListReducer } from "./module/baseList/reducer";
import { cardListReducer } from "./module/cardList/reducer";

console.log(fp, "fp");
export default createStore(
  combineReducers({
    baseListReducer,
    cardListReducer,
  }),
  applyMiddleware(thunkMiddleware)
);
