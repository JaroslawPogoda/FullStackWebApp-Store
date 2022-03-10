//imports
import React, { useState,useEffect } from "react"
import Product from "./Product/Product"
import { MdChevronRight } from "react-icons/md"
import { MdChevronLeft } from "react-icons/md"
import {BiPlus} from "react-icons/bi"
import "./Products.css"
import styled from "styled-components"
import Categories from "./Categories/Categories"
import {Link} from "react-router-dom"


//end of Imports
//styled component back button
const ButtonBack = styled(MdChevronLeft)`
  height: 75px;

  width: 75px;
  background: #fff;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    transition-duration: 300ms;
  }
`
//styled componend next button
const ButtonNext = styled(MdChevronRight)`
  height: 75px;
  width: 75px;
  background: #fff;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    transition-duration: 300ms;
  }
`
//styled component button container back
const ButtonContainerBack = styled.div`
  grid-area: Back;
  &:hover {
    color: blue;
  }
  
  height: 100px;
  width: 200;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`
//styled compentent button container next
const ButtonContainerNext = styled.div`
  &:hover {
    color: blue;
  }
  grid-area: Next;
  
  height: 100px;
  width: 200;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`

// declaration of component Products
//@params props: allProducts category setCategory setAllProducts
export default function Products(props) {
  //declaration of page state
  const [page, setPage] = useState(0)
  //temp array declaration and initialization
  let tempArr = []
//declaration and initialization of state categories
  
//  useEffect(() => {},[tempArr])
// declaration of all pproduct array
  // const allProductsArray = props.allProducts.filter((prod) => {
  //   let returnVal = false;

  //   categories[0].map((cat) =>
  //     cat === prod.category ? (returnVal = true) : false
  //   );
  //   return returnVal;
  // });
  const [allProductsArray,setAllProductsArray]= useState(props.allProducts)

  const filterout=(id)=>{
    console.log(props.filterout)
    props.filterout(id)
  }
  //return
  return (
    <div className="Products">
      <div className="addproduct-div"><Link to="addproduct"><BiPlus className="addproduct"/></Link></div>
     
      <div className="top-left"></div>
      <div className="top-right"><h3>Page:{page+1}</h3></div>
      <div className="bottom-left"></div>
      <div className="bottom-right"></div>
      <div className="Products-container">
        {props.allProducts.slice((page*6),(page*6+6) ).map((product, index) => {
          return <Product key={index*(page+1)} index={index} product={product} filterout={filterout} refreshProduct={props.refreshProduct}/>
        })}
      </div>
      {page > 0 ? (
        <ButtonContainerBack
          className="Back"
          onClick={() =>
            setPage((prevPage) => {
              return prevPage - 1
            })
          }
        >
          <ButtonBack />
        </ButtonContainerBack>
      ) : null}
      {props.allProducts.length - page * 6 > 6 ? (
        <ButtonContainerNext
          className="Next"
          onClick={() =>
            setPage((prevPage) => {
              return prevPage + 1
            })
          }
        >
          <ButtonNext />
        </ButtonContainerNext>
      ) : null}
    </div>
  );//end of return
}//end of component
