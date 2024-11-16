import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  //! Handle Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      console.log(user);
      navigate("/profile", { state: { user } });
      toast.success(`User Logged in as ${user.email}`);
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };

  //! Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      const request = await signInWithPopup(auth, provider);
      const user = request.user;
  

      const userData = {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        emailVerified: user.emailVerified,
        }
     
      
  
      toast.success(`User Register as ${user.email}`);
      console.log(userData);
  
      navigate("/profile", { state: { user: userData } }); // Pass serializable user data
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };

  //! Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="log-content">
        <div className="login-form">
          <h1>Login </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <button type="submit">Login</button>
          </form>
          <h2 className="or">Or</h2>
          <div className="google-box">
            <button onClick={handleGoogleLogin}>
              <img src="/google.png" alt="Google-logo" />
              Continue With Google
            </button>
          </div>
          <div className="new-account">
            <p>
              Create a new Account <Link to={"/register"}>Sign In</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
