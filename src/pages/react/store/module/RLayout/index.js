import { RLAYOUT_CLICK } from "./types";
const defaultState = {
  current: "/todolist",
  routerList: ["/todolist", "/hook"],
};

export const layoutReducer = (state = defaultState, action) => {
  const { type, value } = action;
  const newState = Object.assign({}, state);

  if (type == RLAYOUT_CLICK) {
    newState.current = value;
    return newState;
  }

  return state;
};
