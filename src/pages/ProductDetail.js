import { useParams } from "react-router-dom";
import products from "../products";

import classes from "./ProductDetails.module.css";

const ProductDetail = () => {
  const params = useParams();
  const product = products.find((product) => product.id === params.productId);

  return (
    <div className={classes.content}>
      <h1> {product.name} </h1>
      <div className={classes["product-block"]}>
        <img src={product.image} alt="basket of fruit" />
        <div>
            <h2> {product.price} </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, alias
              maiores accusamus quae rerum modi exercitationem quaerat autem ipsum
              sed quod labore, excepturi non repellendus beatae voluptatibus,
              laborum rem asperiores.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
