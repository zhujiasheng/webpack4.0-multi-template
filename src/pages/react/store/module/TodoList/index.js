import { ADD_TODO_LIST, DELETE_TODO_LIST, GET_TODO_LIST } from "./types";
const deaultState = {
  dataSource: [],
};

export const todoListReducer = (state = deaultState, action) => {
  const { type } = action;
  const newState = JSON.parse(JSON.stringify(state));
  if (type == GET_TODO_LIST) {
    newState.dataSource = action.dataSource;
    return newState;
  } else if (type == ADD_TODO_LIST) {
    newState.dataSource.push(action.item);
    return newState;
  } else if (type == DELETE_TODO_LIST) {
    newState.dataSource.splice(action.index, 1);
    return newState;
  }

  return state;
};
