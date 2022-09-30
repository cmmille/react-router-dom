import classes from './Product.module.css'
const Product = (props) => { 

    return (
        <div className={classes.product}>
            <img src='https://www.att.com/idpassets/global/devices/phones/apple/apple-iphone-14-pro-max/carousel/spaceblack/spaceblack-1.png' />
            <h1> {props.name}</h1>
            <p> {props.price}</p>
        </div>
    )
}

export default Product;