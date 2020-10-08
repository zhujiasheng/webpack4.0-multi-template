import { lazy } from 'react'

const routes = [
  {
    path: '/login',
    component: lazy(() => import(/* webpackChunkName: "login"*/ '../pages/Login/index.js')),
  },
  {
    path: '/todolist',
    component: lazy(() => import(/* webpackChunkName: "login"*/ '../pages/TodoList/index.js')),
  },
  {
    path: '/hook',
    component: lazy(() => import(/* webpackChunkName: "login"*/ '../pages/Hook/HookList.js')),
  },
  {
    path: '/',
    component: lazy(() => import(/* webpackChunkName: "login"*/ '../pages/Hook/HookList.js')),
  },
]

export default routes
