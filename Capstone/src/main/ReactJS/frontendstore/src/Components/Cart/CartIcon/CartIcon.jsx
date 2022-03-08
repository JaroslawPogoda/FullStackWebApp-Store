// Imports
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import "./CartIcon.css";
// Imports end
//component declaration
// @param props: hideCart, setHideCart
function CartIcon(props) {
  //declaration of handleOnClick
  const handleOnClick = (event) => {
    props.setHideCart(!props.hideCart);
  }; //end of handleOnClick
  //return
  return (
    <div onClick={handleOnClick}>
      <MdShoppingCart className="md-shopping-cart" />
      <p>Cart</p>
    </div>
  );
  //end of return
}

export default CartIcon;
