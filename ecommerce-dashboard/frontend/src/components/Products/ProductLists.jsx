import React from "react";
import { useState, useEffect } from "react";
import styles from "./ProductList.module.css";

const ProductLists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();

    setProducts(result);
    // console.warn(result)
  };

  return (
    <>
      <div className={styles.product_container}>
        <h3>Product List</h3>
        <ul className={styles.productHead}>
          <li>S. No</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Company</li>
        </ul>
        {products.map((product, index) => {
            const {name, price, category, userId, company} = product;
          return (
            <>
              <ul className={styles.productItem}>
                <li>{index + 1}</li>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.category}</li>
                <li>{product.company}</li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductLists;
