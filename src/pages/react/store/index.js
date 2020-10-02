import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducerLayout } from "./module/RLayout/reducer";
import { reducerCount, reducerBaseList } from "./module/TodoList/reducer";
export default createStore(
  combineReducers({
    reducerLayout,
    reducerCount,
    reducerBaseList,
  }),
  applyMiddleware(thunk)
);
