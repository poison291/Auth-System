import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { auth } from '../Auth/firebase'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

export default function Home() {
  
  console.log('In my Home');
  
  const navigate = useNavigate()

  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        
        navigate("/profile"); 

      }
      else{
        console.log(false);
        
      }
    })
 
  }, [])
  
  return (
   <div className="container">
   <Link to={'/login'}><button>Login</button></Link> 
   <Link to={'/register'}><button>Register</button></Link> 
   </div>
  )
}
