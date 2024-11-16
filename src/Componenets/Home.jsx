import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <div className="container">
   <Link to={'/login'}><button>Login</button></Link> 
   <Link to={'/register'}><button>Register</button></Link> 
   </div>
  )
}
