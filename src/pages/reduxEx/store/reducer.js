const defaultState = {
  count:1000
};

export const reducer = (state = defaultState, action) => {
  const { type } = action;
  const newState = Object.assign({},state);

  switch (type) {
    case 'ADD' : ++newState.count; return newState;
    case 'DESC' : --newState.count; return newState;
    default : return state;
  }
}
