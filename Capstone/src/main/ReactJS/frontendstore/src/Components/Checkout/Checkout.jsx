//checkout page with purchase button
//imports
import React, { useContext,useState } from "react";
import PaymentInputs from "./Payment/PaymentInputs";
import { CartStateContext } from "../Layout";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
//imports
//component declaration
function Checkout() {
  //declaration of state purchased  type: boolean
  const [purchased, setPurchased] = useState(false);
  //initialization to use CartStateContext containing cart and dispatchCart
  const value = useContext(CartStateContext);
  //declaration of handle submit
  const handleSubmitCheckout = (event) => {
    setPurchased(true)
  };
//return
  return (
    <div>
      {purchased ? (
        <h1>thank you for your purchase</h1>
      ) : (
        <div className="checkout-window">
          <h1>Checkout</h1>

          <div className="checkout-items-from-cart">
            {value.cart.products.map((product, index) => (
              <CheckoutProduct key={index} product={product} />
            ))}
          </div>
          <form className="checkout-form" onSubmit={handleSubmitCheckout}>
            <PaymentInputs />
            <button className="btn-submit-checkout">Pay</button>
          </form>
        </div>
      )}
    </div>
  );
}//end of return

export default Checkout;
