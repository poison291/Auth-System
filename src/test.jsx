import React, {  useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default function Test() {
  const [userData, setuserData] = useState()
  const auth = getAuth()

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
     if (user) setuserData(user)
    })
  },[auth])

console.log(userData?.photoURL);

  return (
  <div>
    Hello Anmol!
    <h1>test {userData?.email}</h1>
    <img src={userData?.photoURL} alt="" />
  </div>
  )
}   
