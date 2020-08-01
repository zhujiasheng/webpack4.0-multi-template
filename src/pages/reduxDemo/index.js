import { Provider } from "react-redux";
import store from "./store";
import Router from "./router";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  root
);
