import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Home() {
  console.log("In my Home");

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/profile");
      } else {
        console.log("User is not logged in.");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="container">
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
    </div>
  );
}
