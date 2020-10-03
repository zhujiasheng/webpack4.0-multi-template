import {
  COUNT_ADD,
  COUNT_DECE,
  BASELIST_SELECT,
  BASELIST_CLEAR,
  BASELIST_ADD,
} from "./actionType";

export const reducerCount = (
  state = {
    count: 1,
  },
  action
) => {
  switch (action.type) {
    case COUNT_ADD:
      return { count: state.count + 1 + action.value };
    case COUNT_DECE:
      return { count: state.count - 1 + action.value };
    default:
      return state;
  }
};

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export const reducerBaseList = (state = { dataSource: [] }, action) => {
  const { type, value } = action;
  let ob = {
    [BASELIST_SELECT]() {
      return {
        dataSource: clone(value),
      };
    },
    [BASELIST_CLEAR]() {
      return {
        dataSource: [],
      };
    },
    [BASELIST_ADD]() {
      const state2 = clone(state);
      return {
        dataSource: [...state2.dataSource, value],
      };
    },
  };

  let result = ob[type];
  return result ? result() : state;
};
