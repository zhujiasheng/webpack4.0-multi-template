import * as action from "../../store/module/TodoList/action";
import { connect } from "react-redux";
import { Button } from "antd";
import { useState, useEffect } from "react";

function Hook(props) {
  return (
    <>
      <FirstHook {...props} />
      <hr />
      <SecondHook {...props} />
    </>
  );
}

function SecondHook(props) {
  const {
    reducerBaseList,
    handleClear,
    handleQueryList,
    handleAddList,
  } = props;
  const { dataSource } = reducerBaseList;
  const [inputValue, setInputValue] = useState("");

  const changeInput = (e) => {
    let v = e.target.value;
    setInputValue(v);
  };

  const handleAddList2 = () => {
    if (!inputValue) return;
    handleAddList(inputValue);
  };

  useEffect(() => {
    handleQueryList();
    return () => {};
  }, []);

  return (
    <>
      <div>
        <input value={inputValue} onChange={changeInput} />
        <button onClick={handleQueryList}>搜索</button>
        <button onClick={handleAddList2}>添加</button>
        <button onClick={handleClear}>清空</button>
      </div>
      <ul>
        {dataSource.map((it) => (
          <li>
            name:{it.name}---age:{it.age}
          </li>
        ))}
      </ul>
    </>
  );
}

function FirstHook(props) {
  const { reducerCount, handleAdd, handleDece } = props;
  const { count } = reducerCount;
  return (
    <>
      <Button onClick={() => handleAdd(10)}>+</Button>
      <span>{count}</span>
      <Button onClick={() => handleDece(-10)}>-</Button>
    </>
  );
}

const mapState = (state) => state;
const mapDispatch = (dispatch) => {
  return {
    handleAdd: (value) => action.handleAdd(dispatch, value),
    handleDece: (value) => action.handleDece(dispatch, value),
    handleQueryList: (value) => action.handleQueryList(dispatch, value),
    handleClear: () => action.handleClear(dispatch),
    handleAddList: (value) => action.handleAddList(dispatch, value),
  };
};

export default connect(mapState, mapDispatch)(Hook);
