import React, { useEffect } from "react";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");

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
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </li>
          <li>
            {auth ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/signup">Signup</Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
