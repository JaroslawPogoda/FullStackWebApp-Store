//@Objective list category and submit
//import
import React from "react";
//end of imports
//declaration of Category Component
export default function Category(props) {
 //declaration of handleChangeCat
  const handleChangeCat = (e) => {
    console.log("i was here");
    props.setActiveCategory(e.target.value);
  };
  //return
  return (
    <li className="Category-li">
      <button onClick={handleChangeCat} value={props.category}>
        <h3 className="Category-title">{props.category}</h3>
      </button>
    </li>
  );//end of return
}//end of declaration
