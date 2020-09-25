import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./store";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { Suspense } from "react";
import "antd/dist/antd.css";
import "./index.css";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from "antd/es/locale/zh_CN";
// import moment from "moment";
// import "moment/locale/zh-cn";
// moment.locale("zh-cn");

const renderLoading = () => <div>loading</div>;

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={renderLoading()}>{renderRoutes(routes)}</Suspense>
    </HashRouter>
  </Provider>
);

ReactDOM.render(<App />, root);
