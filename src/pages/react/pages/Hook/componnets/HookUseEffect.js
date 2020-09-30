import { useState, useEffect } from "react";
function HookUseEffect() {
  const [count, setCount] = useState(100);

  const [count2, setCount2] = useState(100);

  useEffect(() => {
    console.log("1");
  }, [count]);

  useEffect(() => {
    console.log("2");
    return () => {
      console.log("lalala");
    };
  }, [count2]);

  useEffect(() => {
    //只有第一次调用
    console.log("useEffect-init");
  }, []);

  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>累加</button>

      <span>{count2}</span>
      <button onClick={() => setCount2(count2 + 1)}>累加2</button>
    </>
  );
}

export default HookUseEffect;
