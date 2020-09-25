import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { baseListReducer } from "./module/baseList/reducer";
import { cardListReducer } from "./module/cardList/reducer";
import { layoutReducer } from "./module/RLayout";
import { todoListReducer } from "./module/TodoList";

export default createStore(
  combineReducers({
    baseListReducer,
    cardListReducer,
    layoutReducer,
    todoListReducer,
  }),
  applyMiddleware(thunk)
);
