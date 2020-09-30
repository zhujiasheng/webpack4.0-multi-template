// import axios from "axios";
import { message } from "antd";
import {
  GET_TODO_LIST,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  SEARCH_TODO_LIST,
} from "./types";

export const searchTodoList = (dispatch, inputValue, dataSource) => {
  if (dataSource && dataSource.length) {
    let result = inputValue
      ? dataSource.filter((it) => it.name.indexOf(inputValue) > -1)
      : dataSource;
    dispatch({ type: SEARCH_TODO_LIST, result });
  } else {
    getTodoList(dispatch);
  }
};

export const getTodoList = async (dispatch) => {
  const item = {
    key: `${Math.random()}`,
    name: "rise",
    age: Math.random(),
    address: `西湖区湖底公园${Math.random()}号`,
  };
  let dataSource = Array.from({ length: 2 })
    .fill()
    .map((it) => item);

  console.log(0);
  let r1 = await getMess();
  console.log(1);
  let r2 = await getMenu();
  console.log(2);
  dataSource = [...dataSource, r1, r2];
  dispatch({ type: GET_TODO_LIST, dataSource });
};

const getMess = () => {
  const item = {
    key: `${Math.random()}`,
    name: "zhu",
    age: Math.random(),
    address: `西湖区湖底公园${Math.random()}号`,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item);
    }, 500);
  });
};

const getMenu = () => {
  const item = {
    key: `${Math.random()}`,
    name: "zhang",
    age: Math.random(),
    address: `西湖区湖底公园${Math.random()}号`,
  };
  return new Promise((resolve) => {
    setTimeout(resolve(item), 1000);
  });
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
    age: 1,
    address: `西湖区湖底公园${rand}号`,
  };
  dispatch({ type: ADD_TODO_LIST, item });
};

export const deleteTodoList = (dispatch, index) => {
  dispatch({ type: DELETE_TODO_LIST, index });
};
