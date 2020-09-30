import { useContext } from "react";
import { Context } from "./context";

export function ShowArea() {
  const { mess } = useContext(Context);
  return <>{mess.count}</>;
}

export function ButtonAdd() {
  const { dispatch } = useContext(Context);
  return (
    <>
      <button onClick={() => dispatch("ADD")}>添加</button>
    </>
  );
}

const getList = (timeout) => {
  return new Promise((resolve, reject) => {
    console.log("getList-start");
    setTimeout(() => {
      console.log("getList-end");
      resolve();
    }, timeout);
  });
};

export function ButtonDece() {
  const { dispatch } = useContext(Context);
  const deceCount = async () => {
    await getList(2000);
    dispatch("DECE");
  };

  return (
    <>
      <button onClick={deceCount}>减少</button>
    </>
  );
}
