// import axios from "axios";
import { message } from "antd";
import { GET_TODO_LIST, ADD_TODO_LIST, DELETE_TODO_LIST } from "./types";
export const getTodoList = (dispatch) => {
  const item = {
    key: `${Math.random()}`,
    name: "rise",
    age: Math.random(),
    address: `西湖区湖底公园${Math.random()}号`,
  };
  let dataSource = Array.from({ length: 2 })
    .fill()
    .map((it) => item);
  dispatch({ type: GET_TODO_LIST, dataSource });
};

export const addTodoList = (dispatch, value) => {
  // const { value } = currInput.current.state;
  if (!value) {
    message.error("名称不能为空");
    return null;
  }

  const rand = Math.ceil(Math.random() * 100);
  const rand2 = Math.ceil(Math.random() * 100) + 101;
  const item = {
    key: `${rand2}${rand}`,
    name: value,
    age: rand,
    address: `西湖区湖底公园${rand}号`,
  };
  dispatch({ type: ADD_TODO_LIST, item });
};

export const deleteTodoList = (dispatch, index) => {
  dispatch({ type: DELETE_TODO_LIST, index });
};
