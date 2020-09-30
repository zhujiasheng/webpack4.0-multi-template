import { useState } from "react";

function Cont2() {
  const [value, setValue] = useState(100);
  const addCount = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <>
      {value}
      {/* <button onClick={() => setValue(value + 1)}>点击</button> */}
      <button onClick={addCount}>点击</button>
    </>
  );
}

function Context() {
  const [mess, setMess] = useState({ name: 1, age: 2, sex: 3 });

  const changeName = (e) => {
    setMess({
      ...mess,
      name: e.target.value,
    });
  };

  const changeAge = (e) => {
    setMess({
      ...mess,
      age: e.target.value,
    });
  };

  const changeMess = (e) => {
    setMess({
      ...mess,
      sex: e.target.value,
    });
  };

  return (
    <>
      <Cont2 />
      <div>
        {mess.name}
        <input value={mess.name} onChange={changeName} />
      </div>
      <div>
        {mess.age}
        <input value={mess.age} onChange={changeAge} />
      </div>
      <div>
        {mess.sex}
        <input value={mess.sex} onChange={changeMess} />
      </div>
    </>
  );
}

export default Context;
