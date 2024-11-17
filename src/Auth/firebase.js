import { initializeApp } from "firebase/app";
import {  getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5q1Qmk3-mICXmB1Xprs3mWkKI-gyxo0w",
  authDomain: "auth-project-7f786.firebaseapp.com",
  projectId: "auth-project-7f786",
  storageBucket: "auth-project-7f786.firebasestorage.app",
  messagingSenderId: "78825651458",
  appId: "1:78825651458:web:ecced71155aea36287561b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const authStateChanger = () => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user)=>{
    if (user) return user
  })
}
const currentUser = () => {
  const auth = getAuth()
  if(auth.currentUser){
    return auth?.currentUser
  }
}

export {auth, authStateChanger, currentUser}
