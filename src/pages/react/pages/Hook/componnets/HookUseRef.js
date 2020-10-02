import { useRef, useState, useEffect, useMemo } from "react";
function HookUseRef() {
  const ref = useRef();
  const domRef = useRef();
  const [count, setCount] = useState(100);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  ref.current = count;

  useEffect(() => {
    console.log("watch");
    console.log(ref.current);
    ref.current = count;

    domRef.current.value = count;
    return () => {
      // ref.current = count;
    };
  }, [count]);

  return (
    <>
      <input ref={domRef} />
      {ref.current}
      <button onClick={handleClick}>test</button>
    </>
  );
}

export default HookUseRef;
