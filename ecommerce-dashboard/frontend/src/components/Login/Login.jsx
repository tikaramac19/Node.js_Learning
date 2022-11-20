import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // redirect to the home page after user created and account
  // user unable to access signup page after registration

  useEffect(() => {
    const auth = localStorage.getItem("user");

    if (auth) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(email, password);

    const result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await result.json();

    console.log(response);

    if (response.name) {
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    } else {
      alert("Please enter correct Details !!!");
    }
  };

  return (
    <>
      <div className={styles.signin_container}>
        <div className={styles.title}>Sign In </div>
        <form action="" onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
