import Vue from "vue";
import App from "./App";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./index.css";
Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  el: "#root",
  router,
  render: (h) => h(App),
});
