import React, { useEffect } from "react";
import styles from "./Navbar.module.css";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  // logout function
  const logOut = () => {
    localStorage.clear(); // it will clear the localstorage
    navigate("/signup");
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add"> Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            {auth ? (
              <Link onClick={logOut} to="/signup">
                Logout
              </Link>
            ) : (
              <>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
