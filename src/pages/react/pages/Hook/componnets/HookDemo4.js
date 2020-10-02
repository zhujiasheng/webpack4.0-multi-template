import { useState, useContext, createContext } from "react";

const Context = createContext();

function HookChild() {
  return (
    <>
      <HookChildUpdate />
      <HookChildBorder />
      <HookChildColor />
      <HookChildName />
    </>
  );
}

function HookChildColor() {
  const { setColor } = useContext(Context);
  const handleClick = (value) => {
    setColor(value);
  };
  return (
    <div>
      颜色：
      <button onClick={() => handleClick("green")}>green</button>
      <button onClick={() => handleClick("red")}>red</button>
    </div>
  );
}

function HookChildBorder() {
  const { setBorder } = useContext(Context);
  const handleClick = (value) => {
    setBorder(`1px ${value} red`);
  };
  return (
    <div>
      边框：
      <button onClick={() => handleClick("solid")}>solid</button>
      <button onClick={() => handleClick("dashed")}>dashed</button>
    </div>
  );
}

function HookChildUpdate() {
  const { setName } = useContext(Context);
  const [value, setValue] = useState("");

  const handleConfrim = () => {
    setName(value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleConfrim}>确认</button>
      <button onClick={handleClear}>清除</button>
    </div>
  );
}

function HookChildName() {
  const c = useContext(Context);
  return <div style={{ color: c.color, border: c.border }}>~{c.name}~</div>;
}

function HookUseContext() {
  const [name, setName] = useState("hello ni hao");
  const [color, setColor] = useState("black");
  const [border, setBorder] = useState("1px solid #f00");
  return (
    <Context.Provider
      value={{ name, setName, color, setColor, border, setBorder }}
    >
      <HookChild />
    </Context.Provider>
  );
}

export default HookUseContext;
