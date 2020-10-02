export const initMess = {
  count: 100,
};

export const reducer = (state, actionType) => {
  let ob = {
    ADD: () => {
      let curr = Object.assign({}, state);
      curr.count++;
      return curr;
    },
    DECE: () => {
      let curr = Object.assign({}, state);
      curr.count--;
      return curr;
    },
  };

  const result = ob[actionType];
  return result ? result() : state;
};
