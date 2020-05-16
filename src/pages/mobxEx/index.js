import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Button, Input, Tabs, Table } from "./antd";
import "./index.scss";
import CardList from "./components/cardList";
React.Component.prototype.Button = Button;
React.Component.prototype.Input = Input;
React.Component.prototype.Tabs = Tabs;
React.Component.prototype.Table = Table;
React.Component.prototype.AppStore = store;
window.AppStore = store;
const BaseList = require("./components/baseList").default; // 这样做的目的是为了让组件按需引入
// 可以使用全局组件 不用再次引入 目前没有更好的方案 暂时采用这种方案
// const CardList = require('./components/cardList').default;

// define store
function App() {
  const { TabPane } = Tabs;
  return (
    <div className="demoMobx">
      <Tabs defaultActiveKey="2">
        <TabPane tab="baseList" key="1">
          <BaseList />
        </TabPane>
        <TabPane tab="cardList" key="2">
          <CardList />
        </TabPane>
      </Tabs>
    </div>
  );
}

window.VMReactDOM = ReactDOM.render(<App />, document.querySelector("#root"));
