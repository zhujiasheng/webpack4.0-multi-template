import { useState, useEffect } from "react";

function HookUseEffectDemo() {
  const [name, setName] = useState("rise");
  const [age, setAge] = useState(100);
  const [sex, setSex] = useState("boy");

  useEffect(() => {
    console.log("effect-name");
  }, [name]);

  useEffect(() => {
    console.log("effect-age");
  }, [age]);

  useEffect(() => {
    console.log("effect-sex");
  }, [sex]);

  const handleClick = (type) => {
    const rand = Math.ceil(Math.random() * 1000);
    let ob = {
      name: () => setName(rand + "name"),
      age: () => setAge(rand + "age"),
      sex: () => setSex(rand + "sex"),
      all: () => {
        setName(rand + "name");
        setAge(rand + "age");
        setSex(rand + "sex");
      },
    };
    ob[type]();
  };

  return (
    <>
      <ul>
        <li>name:{name}</li>
        <li>age:{age}</li>
        <li>sex:{sex}</li>
      </ul>
      <button onClick={() => handleClick("name")}>click-name</button>
      <button onClick={() => handleClick("age")}>click-age</button>
      <button onClick={() => handleClick("sex")}>click-sex</button>
      <button onClick={() => handleClick("all")}>click-all</button>
    </>
  );
}

function HookUseEffectDemo2() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    timer = setTimeout(() => {
      let d = new Date();
      setDate(d);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [date]);
  return (
    <>
      <div>currtime:{date.toLocaleString()}</div>
    </>
  );
}

export default HookUseEffectDemo;
