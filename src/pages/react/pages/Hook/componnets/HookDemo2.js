import {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";

function HookUseStateDemo() {
  const [list, setList] = useState({ name: 1, age: 2, sex: 3 });

  const rand = Math.ceil(Math.random() * 1000);
  const setName = () => {
    const name = `rise-${rand}`;
    setList({
      ...list,
      name,
    });
  };

  const setAge = () => {
    const age = `age-${rand}`;
    setList({
      ...list,
      age,
    });
  };

  const setSex = () => {
    const sex = `boy-${rand}`;
    setList({
      ...list,
      sex,
    });
  };

  return (
    <>
      <ul>
        <li>name:{list.name}</li>
        <li>age:{list.age}</li>
        <li>sex:{list.sex}</li>
      </ul>
      <button onClick={setName}>name</button>
      <button onClick={setAge}>age</button>
      <button onClick={setSex}>sex</button>
    </>
  );
}

function HookUseStateDemo2() {
  const [list, setList] = useState([
    { name: 1, age: 1, sex: 1 },
    { name: 2, age: 2, sex: 2 },
  ]);

  const handleAdd = () => {
    const rand = Math.ceil(Math.random() * 1000);
    let item = {
      name: `${rand}--name`,
      age: `${rand}--age`,
      sex: `${rand}--sex`,
    };
    setList([...list, item]);
  };

  const handleDelete = (index) => {
    let list2 = JSON.parse(JSON.stringify(list));
    list2.splice(index, 1);
    setList([...list2]);
  };

  return (
    <>
      <button onClick={handleAdd}>添加数据</button>
      <ul>
        {list.map((it, key) => (
          <li key={key}>
            <span>
              {" "}
              name:{it.name}---age:{it.age}
            </span>
            <button onClick={() => handleDelete(key)}>删除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HookUseStateDemo;
