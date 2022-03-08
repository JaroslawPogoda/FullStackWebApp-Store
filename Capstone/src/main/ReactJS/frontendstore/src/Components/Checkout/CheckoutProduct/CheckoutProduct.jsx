//import 
import React from 'react';
import './CheckoutProduct.css'
//end of import
//declaration of component Checkout Product
//@params props: product
function CheckoutProduct(props) {
//return
 return (<div className="checkout-product">
    <img className="product-img" src  = {props.product.image} alt={props.product.title}/>
   <div className="checkout-product-detail">
    <h2 className="CheckoutProduct">{props.product.title}</h2>
    <h4 className="price-checkout">Price:{props.product.price}x{props.product.quantity}={props.product.price*props.product.quantity}</h4>
    <h4 className="checkout-quantity">Quantity:{props.product.quantity}</h4>
    </div>
  </div>);
}//end of return

export default CheckoutProduct;
