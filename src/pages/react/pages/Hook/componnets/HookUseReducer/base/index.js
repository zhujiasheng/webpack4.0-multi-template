import { useReducer } from "react";

const reducer = (state, actionType) => {
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

function HookUseReducer() {
  const [mess, dispatch] = useReducer(reducer, {
    count: 19,
  });

  const addCount = () => {
    dispatch("ADD");
  };

  const deceCount = () => {
    dispatch("DECE");
  };

  return (
    <>
      <div>
        <button onClick={addCount}>添加</button>
        <span>-{mess.count}-</span>
        <button onClick={deceCount}>减少</button>
      </div>
    </>
  );
}

export default HookUseReducer;
