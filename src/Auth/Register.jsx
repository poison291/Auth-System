import React, { useState } from "react";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
//   const [LoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  //! Handle Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      console.log(user);

        navigate("/profile");
      toast.success(`User Registered as ${email}`);
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
      toast.success(`User Register as ${user.email}`);
      const user = request.user;
      console.log(user);

          navigate("/profile");
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
      <div className="reg-content">
        <div className="register-form">
          <h1>Sign In</h1>
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
            <button type="submit">Register</button>
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
              Already Have an account? <Link to={"/login"}>Log In</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
