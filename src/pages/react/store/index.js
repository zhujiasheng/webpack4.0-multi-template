import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { layoutReducer } from "./module/RLayout";
import { todoListReducer } from "./module/TodoList";

export default createStore(
  combineReducers({
    layoutReducer,
    todoListReducer,
  }),
  applyMiddleware(thunk)
);
