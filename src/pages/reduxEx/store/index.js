import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { baseListReducer } from "./module/baseList/reducer";
import { cardListReducer } from "./module/cardList/reducer";

export default createStore(
  combineReducers({
    baseListReducer,
    cardListReducer,
  }),
  applyMiddleware(thunkMiddleware)
);
