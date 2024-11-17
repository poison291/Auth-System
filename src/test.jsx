import React, { useContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { authStateChanger } from "./Auth/firebase";
import { currentUser } from "./Auth/firebase";

export default function Test() {
  // const auth = getAuth()
  const user = currentUser();

  const [userData, setuserData] = useState();
  useEffect(() => {
    setuserData(user);
}, [user]);
// currentUser()
console.log(userData);
  return 
  <div>
    Hello Anmol!
  </div>;
}   
