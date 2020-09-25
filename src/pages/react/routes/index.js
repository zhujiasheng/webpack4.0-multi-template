import { lazy } from "react";
import RLayout from "../pages/RLayout";

const routes = [
  {
    path: "/login",
    component: lazy(() =>
      import(/* webpackChunkName: "baseList"*/ "../pages/Login/index.js")
    ),
  },
  {
    path: "/",
    component: RLayout,
    routes: [
      {
        path: "/todolist",
        component: lazy(() =>
          import(/* webpackChunkName: "baseList"*/ "../pages/TodoList/index.js")
        ),
      },
      {
        path: "/baseList",
        component: lazy(() =>
          import(/* webpackChunkName: "baseList"*/ "../pages/BaseList")
        ),
      },
      {
        path: "/cardList",
        component: lazy(() =>
          import(/* webpackChunkName: "CardList"*/ "../pages/CardList")
        ),
      },
    ],
  },
];

export default routes;
