import React, { useEffect } from "react";
import styles from "./Navbar.module.css";

import { json, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");

  // console.log(auth);

  const navigate = useNavigate();
  // logout function
  const logOut = () => {
    localStorage.clear(); // it will clear the localstorage
    navigate("/signin");
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <img
          src="https://www.jetpunk.com/img/user-photo-library/3a/3a1b007d7b-450.png"
          alt="logo"
        />

        {auth ? (
          <>
            <ul className={styles.product_cont}>
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
                <Link to="/profile">Profile</Link>{" "}
              </li>
              <li>
                <Link onClick={logOut} to="/signin">
                  Logout
                  <span className={styles.userName}>
                    ({JSON.parse(auth).name})
                  </span>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className={styles.auth_container}>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/signin">Login</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
