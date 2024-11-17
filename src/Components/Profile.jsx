import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Profile.css";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { FaSignInAlt, FaUserPlus, FaSun, FaMoon } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth/cordova";

export default function Profile() {
  const [demo, setdemo] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setuser] = useState("");

  const auth = getAuth();

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setuser(user);
        } else {
          console.log(false);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [auth]);

  console.log(user);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
    // navigate("/login");
  };

  return (
    <div className={`profile-container ${darkMode ? "dark" : ""}`}>
      <div className="profile-header">
        <h2>Welcome Back, {user?.displayName || "User"}</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-pic-container">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="Profile"
              className="profile-pic"
            />
          </div>
          <div className="info">
            <h3>{user?.displayName || "User Name"}</h3>
            <p>Email: {user?.email}</p>
            <p>Email Verified: {user?.emailVerified ? "Yes" : "No"}</p>
            <p>UID: {user?.uid}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button onClick={() => navigate("/edit-profile")}>
            Edit Profile
          </button>
        </div>
      </div>

      <div className="profile-stats">
        <h3>Account Statistics</h3>
        <div className="stats">
          <div className="stat-card">
            <h4>Posts</h4>
            <p>15</p>
          </div>
          <div className="stat-card">
            <h4>Followers</h4>
            <p>200</p>
          </div>
          <div className="stat-card">
            <h4>Following</h4>
            <p>180</p>
          </div>
        </div>
      </div>

      <div className="activity-feed">
        <h3>Your Activity</h3>
        <div className="activity">
          <p>Posted a new comment on "Web Dev Tips"</p>
          <p>Liked "JavaScript Frameworks" post</p>
          <p>Shared a new article about React</p>
        </div>
      </div>

      <div className="account-completeness">
        <h3>Profile Completeness</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: "75%" }}></div>
        </div>
        <p>75% complete</p>
      </div>
    </div>
  );
}
