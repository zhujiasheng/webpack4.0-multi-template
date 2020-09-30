import { useState, useEffect } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import TodoListUI from "./TodoListUI";
import {
  searchTodoList,
  getTodoList,
  addTodoList,
  deleteTodoList,
} from "../../store/module/TodoList/actions";

const getColumns = (deleteList) => {
  return [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      render: (text, record, index) => {
        return <Button onClick={() => deleteList(index)}>删除</Button>;
      },
    },
  ];
};

const TodoList = (props) => {
  // const currInput = React.createRef();
  const { todoListReducer, getTodo, deleteList, addList, searchList } = props;
  const { dataSource } = todoListReducer;
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <TodoListUI
        inputValue={inputValue}
        setInputValue={setInputValue}
        dataSource={dataSource}
        addList={() => addList(inputValue)}
        searchList={() => searchList(inputValue, dataSource)}
        columns={getColumns(deleteList)}
      />
    </>
  );
};

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
  return {
    searchList: (inputValue, dataSource) => {
      searchTodoList(dispatch, inputValue, dataSource);
    },
    addList: (inputValue) => {
      addTodoList(dispatch, inputValue);
    },
    deleteList: (index) => {
      deleteTodoList(dispatch, index);
    },
    getTodo: () => {
      getTodoList(dispatch);
    },
  };
};

export default connect(mapState, mapDispatch)(TodoList);
