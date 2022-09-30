import { uid } from "uid";

import Product from "../components/Product";

import classes from "./Products.module.css";

const Products = () => {
  const products = [
    { name: "iPhone 14 Pro Max", price: "$999.99" },
    { name: "iPhone 14 Pro", price: "$699.99" },
    { name: "iPhone 14", price: "$399.99" },
    { name: "iPhone 13 Pro Max", price: "$799.99" },
    { name: "iPhone 13", price: "$399.99" },
    { name: "iPhone 12", price: "299.99" },
    { name: "iPhone 11", price: "$199.99" },
  ];

  return (
    <>
      <h1> Products </h1>
      <div className={classes.products}>
        {products.map((product) => (
          <Product key={uid()} name={product.name} price={product.price}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
