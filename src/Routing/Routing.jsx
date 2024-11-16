import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Componenets/Home'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Profile from '../Componenets/Profile'

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
