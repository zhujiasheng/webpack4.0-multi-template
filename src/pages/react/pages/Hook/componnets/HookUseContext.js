import { useState, createContext, useContext } from "react";

const context = createContext();

const styleA = {
  border: "1px solid #f00",
};

const styleB = {
  border: "1px solid #0f0",
};

const HookChild = () => {
  return (
    <>
      <div style={styleA}>
        <HookChild2 />
        <HookChild3 />
      </div>
    </>
  );
};

const HookChild2 = () => {
  const ob = useContext(context);
  return (
    <>
      <div style={styleB}>{ob.name}</div>
    </>
  );
};

const HookChild3 = () => {
  const ob = useContext(context);
  return (
    <>
      <div style={styleB}>{ob.age}</div>
    </>
  );
};

function HookUseContext() {
  const rand = Math.ceil(Math.random() * 100);
  const name = rand + "-name";
  const age = rand + "-age";
  const [mess, setMess] = useState({ name, age });

  const handleContext = () => {
    const rand = Math.ceil(Math.random() * 100);
    const name = rand + "-name";
    const age = rand + "-age";

    setMess({
      ...mess,
      name,
      age,
    });
  };

  return (
    <>
      <button onClick={handleContext}>测试</button>
      <context.Provider value={mess}>
        <HookChild />
      </context.Provider>
    </>
  );
}

export default HookUseContext;
