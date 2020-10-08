import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducerTodoList } from './modules/todolist/reducer'
import thunk from 'redux-thunk'

export default createStore(combineReducers({ reducerTodoList }), applyMiddleware(thunk))
