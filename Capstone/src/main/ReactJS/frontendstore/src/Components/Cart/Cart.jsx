//use Renders cart and all functionalities.
//imports
import React, { useContext } from "react";
import { CartStateContext } from "../Layout";
import CartProduct from "./CartProduct/CartProduct";
import { MdClose, MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Cart.css";
//end of imports
//Cart Component Declaration
//@ params props: hideCart setHideCart
function Cart(props) {
  //declaration of value which is CartStateContext value which is dispatchCart,cart
  const value = useContext(CartStateContext);
  //initialization of total
  let total = 0;
  //declaration of handleCloseCart
  const handleCloseCart = (event) => {
    //closing cart
    props.setHideCart(true);
  };//end of handleCloseCart
  //return
  return (
    <div className="cart">
      <h1>Cart</h1>
      <MdClose className="cart-close" onClick={handleCloseCart} />
      {console.log(value)}
      {value.cart.products.map((product, index) => {
        total += product.price * product.quantity;
        return (
          <CartProduct
            product={product}
            index={index}
            key={index}
            dispatchCart={value.dispatchCart}
          />
        );
      })}
      <p>Total:${Math.round(total * 100) / 100}</p>
      <Link to={"checkout"}>
        <button>
          <MdPayment />
          Checkout
        </button>
      </Link>
    </div>
  );//emd pf retirm
}

export default Cart;
