import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

    const navigate = useNavigate();

  const submitProduct = async (e) => {
    e.preventDefault();
    // console.log(name, price, category, company);

    const result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const productData = await result.json();
    console.warn(productData);

    if(productData){
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
              placeholder="enter product name"
              className={styles.inputbox}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="enter product price"
              className={styles.inputbox}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="text"
              name="category"
              placeholder="enter product category"
              className={styles.inputbox}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              name="company"
              placeholder="enter product company"
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
