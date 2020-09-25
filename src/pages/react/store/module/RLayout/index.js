import { RLAYOUT_CLICK } from "./types";
const defaultState = {
  current: "/todolist",
  routerList: ["/todolist", "/cardList", "/baseList"],
};

export const layoutReducer = (state = defaultState, action) => {
  const { type, value } = action;
  const newState = Object.assign({}, state);

  if (type == RLAYOUT_CLICK) {
    newState.current = value;
  }

  return newState;
};
