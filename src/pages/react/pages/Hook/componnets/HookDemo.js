import { useState, useEffect, useReducer } from "react";

function Clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function HookUseReducer(state, action) {
  const { type, value, index } = action;
  let ob = {
    ADD: () => {
      let state2 = Clone(state);
      return [...state2, value];
    },
    DECE: () => {
      let state2 = Clone(state);
      state2.splice(index, 1);
      return state2;
    },
    SELECT: () => {
      let state2 = Clone(value);
      return state2;
    },
  };
  let result = ob[type];
  return result ? result() : state;
}

function HookDemoAdd(props) {
  const { dispatch } = props;
  const handleAdd = () => {
    let rand = Math.ceil(Math.random() * 100);
    let value = { name: rand.toString(), age: rand * 2 };
    dispatch({ type: "ADD", value });
  };

  return {
    handleAdd,
  };
}

function HookDemoSearch(props) {
  const { mess, dispatch, getList } = props;
  const [inputValue, setInputVal] = useState("");

  const changeInputValue = (e) => {
    setInputVal(e.target.value);
  };

  const filterData = (currvalue = "", mess = []) => {
    return mess.filter(({ name }) => name.indexOf(currvalue) > -1) || [];
  };

  const handleSearch = () => {
    if (!inputValue || inputValue.trim() == "") {
      dispatch({ type: "" });
      return;
    }
    let value = filterData(inputValue, mess);
    dispatch({ type: "SELECT", value });
  };

  const handleClear = () => {
    setInputVal("");
  };

  const handleRefer = async () => {
    let value = await getList(1000);
    dispatch({ type: "SELECT", value });
  };

  useEffect(() => {
    handleRefer();
  }, []);

  return {
    inputValue,
    changeInputValue,
    handleSearch,
    handleClear,
    handleRefer,
  };
}

function HookDemoList(props) {
  const { dispatch } = props;
  const handleDece = (index) => {
    dispatch({ type: "DECE", index });
  };
  return {
    handleDece,
  };
}

function HookDemoAddUI({ handleAdd }) {
  return <button onClick={handleAdd}>添加</button>;
}

function HookDemoSearchUI({
  inputValue,
  changeInputValue,
  handleSearch,
  handleClear,
  handleRefer,
}) {
  return (
    <>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleSearch}>搜索</button>
        <button onClick={handleClear}>清除</button>
        <button onClick={handleRefer}>刷新</button>
      </div>
    </>
  );
}

function HookDemoListUI({ mess, handleDece }) {
  return (
    <>
      <ul>
        {mess.map((it, index) => (
          <li key={index}>
            {it.name}==={it.age}
            <button onClick={() => handleDece(index)}>删除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

const getList = (time) => {
  const rand = Math.ceil(Math.random() * 100) || 99;
  let list = Array.from({ length: 2 })
    .fill()
    .reduce((curr, it) => {
      let initState = [
        { name: `${rand}-rise`, age: `${rand * 2}-year` },
        { name: `${rand}-js`, age: `${rand * 3}-year` },
      ];
      curr.push(...initState);
      return curr;
    }, []);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(list);
    }, time);
  });
};

function HookTodoList() {
  let [mess, dispatch] = useReducer(HookUseReducer, []);
  let { handleAdd } = HookDemoAdd({ mess, dispatch });
  let searchOBJ = HookDemoSearch({ mess, dispatch, getList });
  let { handleDece } = HookDemoList({ mess, dispatch });

  return (
    <>
      <HookDemoSearchUI {...searchOBJ} />
      <HookDemoAddUI handleAdd={handleAdd} />
      <HookDemoListUI mess={mess} handleDece={handleDece} />
    </>
  );
}

function HookDome() {
  return (
    <>
      <HookTodoList />
      <hr />
      <HookTodoListTwo />
    </>
  );
}

const HookUseReducerTwo = (state, action) => {
  const { type, value } = action;

  let ob = {
    ADD: () => {
      let state2 = Clone(state);
      return [...state2, value];
    },
  };

  let result = ob[type];

  return result ? result() : HookUseReducer(state, action);
};

const HookDemoListTwo = (props) => {
  let result = HookDemoList(props);
  let result2 = HookDemoAdd(props);
  return {
    ...result,
    ...result2,
  };
};

function HookDemoSearchUITwo({
  inputValue,
  changeInputValue,
  handleSearch,
  handleClear,
  handleRefer,
}) {
  return (
    <>
      <div style={{ border: "1px solid #ff9" }}>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleSearch}>搜索</button>
        <button onClick={handleClear}>清除</button>
        <button onClick={handleRefer}>刷新</button>
      </div>
    </>
  );
}

function HookDemoListUITwo({ mess, handleDece, handleAdd }) {
  return (
    <>
      <ul>
        {mess.map((it, index) => (
          <li key={index}>
            {it.name}==={it.age}
            <button onClick={() => handleDece(index)}>删除</button>
            <button onClick={() => handleAdd(index)}>添加</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function HookTodoListTwo() {
  let [mess, dispatch] = useReducer(HookUseReducerTwo, []);
  let searchOBJ = HookDemoSearch({ mess, dispatch, getList });
  let { handleDece, handleAdd } = HookDemoListTwo({ mess, dispatch });
  return (
    <>
      <HookDemoSearchUITwo {...searchOBJ} />
      <HookDemoListUITwo
        mess={mess}
        handleAdd={handleAdd}
        handleDece={handleDece}
      />
    </>
  );
}

export default HookDome;
