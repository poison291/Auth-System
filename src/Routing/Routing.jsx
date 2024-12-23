import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Profile from '../Components/Profile'
import Test from '../test'


export default function Routing() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
    
        },
        {

            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/test',
            element: <Test/>
        }
    ])
  return (
   <>
   <div className="app">
    <RouterProvider router={router}/>
   </div>
   </>
  )
}
