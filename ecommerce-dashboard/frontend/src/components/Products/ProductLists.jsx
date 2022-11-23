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

  // delete item
  const deleteItem = async (id) => {
    console.warn(id);

    let response = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    });

    response = await response.json();

    if (response) {
      getProducts();
      alert("Item deleted !!!");
    }
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
          <li>Operation</li>
        </ul>
        {products.map((product, index) => {
          const { _id, name, price, category, userId, company } = product;
          // console.log(_id)
          return (
            <>
              <ul className={styles.productItem}>
                <li>{index + 1}</li>
                <li>{name}</li>
                <li>{price}</li>
                <li>{category}</li>
                <li>{company}</li>
                <li>
                  <button
                    onClick={() => {
                      deleteItem(_id);
                    }}
                  >
                    Delete
                  </button>
                  <button> Update</button>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductLists;
