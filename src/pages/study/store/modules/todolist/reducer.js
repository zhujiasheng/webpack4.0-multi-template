import { COUNT_ADD, COUNT_DECE } from "./actionType";

const initState = {
  count: 100,
};

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export const reducerTodoList = (state = initState, action) => {
  const { type } = action;
  let ob = {
    [COUNT_ADD]() {
      return {
        count: state.count + 1,
      };
    },
    [COUNT_DECE]() {
      return {
        count: state.count - 1,
      };
    },
  };
  let result = ob[type];
  return result ? result() : state;
};
