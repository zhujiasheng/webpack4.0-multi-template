import { createContext, useReducer } from "react";
import { reducer, initMess } from "./reducer";

export const Context = createContext();

export const GloProvider = (props) => {
  const [mess, setMess] = useReducer(reducer, initMess);
  const { children } = props;
  return (
    <Context.Provider value={{ mess, setMess }}>{children}</Context.Provider>
  );
};
