import { useState, useEffect } from "react";

export default function SecondHook(props) {
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
