import { lazy } from "react";
import RLayout from "../pages/RLayout";

const routes = [
  {
    path: "/",
    component: RLayout,
    routes: [
      {
        path: "/baseList",
        component: lazy(() =>
          import(/* webpackChunkName: "baseList"*/ "../pages/BaseList")
        ),
      },
      {
        path: "/cardList",
        exact: true,
        component: lazy(() =>
          import(/* webpackChunkName: "CardList"*/ "../pages/CardList")
        ),
      },
    ],
  },
];

export default routes;
