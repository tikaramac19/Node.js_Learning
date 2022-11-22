import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import { json, useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const navigate = useNavigate();

  // let localStorageData = localStorage.getItem("user");
  // let dataObj = JSON.parse(localStorageData);
  // const { _id } = dataObj;
  // console.log(_id);

  const submitProduct = async (e) => {
    e.preventDefault();
    // console.log(name, price, category, company);

    // getting user_id of the loggedIn user
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    // console.log(userId);

    const result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category,userId, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const productData = await result.json();
    console.warn(productData);

    if (productData) {
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles.product_container}>
        <div className={styles.title}>Add Product</div>
        <div>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className={styles.inputbox}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="Enter product price"
              className={styles.inputbox}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="text"
              name="category"
              placeholder="Enter product category"
              className={styles.inputbox}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              name="company"
              placeholder="Enter product company"
              className={styles.inputbox}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <button onClick={submitProduct}>Add Product</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
