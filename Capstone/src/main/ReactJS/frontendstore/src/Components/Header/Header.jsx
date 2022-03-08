//imports
import React,{useState,useContext} from "react";
import Nav from './Nav/Nav'
import Cart from '../Cart/Cart'
import CartIcon from "../Cart/CartIcon/CartIcon";
import { CartStateContext } from "../Layout";
import './Header.css'
//end of imports
//Declaration of components

export default function Header() {
  //initialization of value : cart, dispachCart
  const value = useContext(CartStateContext)
  //totalQuantity State
    const [totalQuantity,setTotalQuantity]=useState(0)
    //hideCart state
    const [hideCart,setHideCart]=useState(true)
    //return 
  return (
    <div className="Header">
      <Nav />
      <div className="cart-icon">
      {value.cart.token?hideCart?<CartIcon setTotalQuantity={setTotalQuantity} totalQuantity={totalQuantity} hideCart={hideCart} setHideCart={setHideCart}/>:<Cart setHideCart={setHideCart}/>:null}
      </div>
    </div>
  );//end of return
}//end of component
