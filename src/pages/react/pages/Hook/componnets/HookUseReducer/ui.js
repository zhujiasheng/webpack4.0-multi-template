import { useContext } from "react";
import { Context } from "./context";

export function ShowArea() {
  const { mess } = useContext(Context);
  return <>{mess.count}</>;
}

export function ButtonAdd() {
  const { setMess } = useContext(Context);
  const addCount = () => {
    setMess("ADD");
  };
  return <ButtonAddUI addCount={addCount} />;
}

function ButtonAddUI(props) {
  return <button onClick={props.addCount}>添加</button>;
}

const getList = (timeout) => {
  return new Promise((resolve, reject) => {
    console.log("getList-start-1");
    setTimeout(() => {
      console.log("getList-end");
      resolve();
    }, timeout);
  });
};

export function ButtonDece() {
  const { setMess } = useContext(Context);
  const deceCount = async () => {
    await getList(2000);
    setMess("DECE");
  };

  return <ButtonDeceUI deceCount={deceCount} />;
}

function ButtonDeceUI(props) {
  return <button onClick={props.deceCount}>减少</button>;
}
