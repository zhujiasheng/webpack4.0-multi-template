import { Button } from "antd";

export default function FirstHook(props) {
  const { reducerCount, handleAdd, handleDece } = props;
  const { count } = reducerCount;
  return (
    <>
      <Button onClick={() => handleAdd(10)}>+</Button>
      <span>{count}</span>
      <Button onClick={() => handleDece(-10)}>-</Button>
    </>
  );
}
