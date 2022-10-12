import { Link } from "react-router-dom";

import classes from './Product.module.css'

const Product = (props) => { 
    const url = "/products/" + props.id

    return (
        <div className={classes.product}>
            <img src={props.image} alt="basket of fruit"/>
            <Link to={url}>
                <h1> {props.name}</h1>
            </Link>
            <p> {props.price}</p>
        </div>
    )
}

export default Product;