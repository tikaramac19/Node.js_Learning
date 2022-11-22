import React, { useState, useEffect } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // redirect to the home page after user created and account
  // user unable to access signup page after registration

  useEffect(() => {
    const auth = localStorage.getItem("user");

    if (auth) {
      navigate("/signin");
    }  
  }, []);

  const submitValue = async (e) => {
    e.preventDefault();
    // console.log(name,username, password);
    const result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await result.json();

    console.warn(response);

    // localStorage.setItem("user", JSON.stringify(response));

    if (response) {
      navigate("/signin");
    }
  };

  return (
    <>
      <div className={styles.signup_container}>
        <div className={styles.title}>Register </div>
        <form action="" onSubmit={submitValue}>
          <div className="name">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="username">
            <label htmlFor="">Username:</label>
            <input
              type="email"
              name="email"
              placeholder="username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="password">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
