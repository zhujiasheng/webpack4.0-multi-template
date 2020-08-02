const defaultState = {
  count: 1000,
};

export const baseListReducer = (state = defaultState, action) => {
  const { type } = action;
  const newState = Object.assign({}, state);

  switch (type) {
    case "MODULE_BASELIST_ADD": {
      ++newState.count;
      return newState;
    }
    case "MODULE_BASELIST_DECE":
      --newState.count;
      return newState;
    default:
      return state;
  }
};
