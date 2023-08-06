import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/pages/login'))
const UserList = lazy(() => import('@/pages/user/user-list'))
const Home = lazy(() => import('@/pages/home'))
const Role = lazy(() => import('@/pages/role'))
const NoFound = lazy(() => import('@/pages/no-found'))

const routes: RouteObject[] = [
  {
    path: '/',
    // 重定向
    element: <Navigate to={'/login'} />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/user',
    children: [
      {
        path: '',
        element: <Navigate to={'/user/list'} />
      },
      {
        path: 'list',
        element: <UserList />
      },
      // {
      //   path: 'list/:id',
      //   element: <UserDetail />
      // },
      {
        path: 'role',
        element: <Role />
      }
    ]
  },
  {
    path: '/*',
    element: <NoFound />
  }
]

export default routes
