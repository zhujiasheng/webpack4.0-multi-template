import { lazy } from "react";
import RLayout from "../pages/RLayout";

const routes = [
  {
    path: "/login",
    component: lazy(() =>
      import(/* webpackChunkName: "login"*/ "../pages/Login/index.js")
    ),
  },
  {
    path: "/",
    component: RLayout,
    routes: [
      {
        path: "/todolist",
        component: lazy(() =>
          import(/* webpackChunkName: "todolist"*/ "../pages/TodoList/index.js")
        ),
      },
      {
        path: "/hook",
        component: lazy(() =>
          import(/* webpackChunkName: "hook"*/ "../pages/Hook/index.js")
        ),
      },
    ],
  },
];

export default routes;
