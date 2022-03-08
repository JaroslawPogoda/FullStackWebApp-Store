//imports
import React from "react";
//end of imports
//declaration of PaymentInputs component
export default function PaymentInputs() {
  //return
  return (
    <div>
      <label htmlFor="ccn">Credit Card Number:</label>
      <input
        id="ccn"
        type="tel"
        inputMode="numeric"
        pattern="[0-9\s]{13,19}"
        autoComplete="cc-number"
        maxLength="19"
        placeholder="xxxx xxxx xxxx xxxx"
      />
      Card Expiration:
      <select name="expireMM" id="expireMM">
        <option value="">Month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <select name="expireYY" id="expireYY">
        <option value="">Year</option>
        <option value="20">2022</option>
        <option value="21">2023</option>
        <option value="22">2024</option>
        <option value="23">2025</option>
        <option value="24">2026s</option>
      </select>
      <input
        className="inputCard"
        type="hidden"
        name="expiry"
        id="expiry"
        maxLength="4"
      />
    </div>
  );//end of return
}//end of component
