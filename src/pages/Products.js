import { uid } from "uid";

import Product from "../components/Product";

import classes from "./Products.module.css";

const Products = () => {
  const products = [
    { name: "Assorted Fruits", price: "$19.99", image: "/images/assorted.png"},
    { name: "Assorted Fruits and Berries", price: "$19.99", image: "/images/assorted2.png"},
    { name: "Mixed Berries", price: "$19.99", image: "/images/berries.png" },
    { name: "Citrus", price: "$19.99", image: "/images/citrus.png" },
    { name: "Coconut", price: "$29.99", image: "/images/coconuts.png" },
    { name: "Pineapple", price: "$29.99", image: "/images/pineapple.png" },
    { name: "Pumpkin", price: "$39.99", image: "/images/pumpkins.png" },
  ];

  return (
    <>
      <h1> Products </h1>
      <div className={classes.products}>
        {products.map((product) => (
          <Product
            key={uid()}
            id= {uid()}
            name={product.name}
            price={product.price}
            image={product.image}
          ></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
