const defaultState = {
  count: 10,
};
export const cardListReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "ADD":
      ++newState.count;
      return newState;
    case "DECE":
      --newState.count;
      return newState;
    default:
      return newState;
  }
};
