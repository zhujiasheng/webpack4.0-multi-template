import Vue from "vue";
import VueRouter from "vue-router";
import _Layout from "../pages/Layout";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: _Layout,
    redirect: "/baseCard",
    children: [
      {
        path: "/baseCard",
        component: () =>
          import(/*webpackChunkName:"baseCard"*/ "../pages/baseCard"),
      },
      {
        path: "/cardList",
        component: () =>
          import(/* webpackChunkName:"introduce"*/ "../pages/CardList"),
      },
    ],
  },
];

export default new VueRouter({
  routes,
});
