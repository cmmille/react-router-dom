import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1> Welcome! </h1>
      <p>All of the product images on this site were generated using Stable Diffusion AI. </p> 
      <Link to="/products"><button>Products</button></Link>
    </>
  );
};

export default Welcome;
