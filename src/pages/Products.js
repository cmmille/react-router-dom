import { uid } from "uid";

import products from "../products";
import Product from "../components/Product";

import classes from "./Products.module.css";

const Products = () => {
  
  return (
    <>
      <h1> Products </h1>
      <div className={classes.products}>
        {products.map((product) => (
          <Product
            key={uid()}
            id= {product.id}
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
