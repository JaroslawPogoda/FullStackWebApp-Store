//@OBjective: Popout component with more information and buttons 
//import
import React,{useContext, useState} from "react";
import styled from "styled-components";
import{ MdClose} from 'react-icons/md'

import {CartStateContext} from '../../../Layout'
//end of import
//styled components Background
const Background = styled.div`
  width: 100%;
  heights: 100%;
  
  position: absolute;
  display: flex;
  justify-content: center;
  aligh-item: center;
`;
//Styled component ProductsWrapper
const ProductsWrapper = styled.div`
  padding:20px 10px 20px 10px;
  width: 800px;
  height: 500px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
// styled img component ProductImg
const ProductImg = styled.img`
  width: 300px;
  height: 460px;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: cover;
`;
//styled productContent component
const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
//styled CloseButton
const CloseProductButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition:all 300ms;
  &:hover {
    transform: scale(1.07);
    transition:all 300ms;
    color:#020510;
  }
`;
//declaration of popout componendt
export const ProdPopOut = (props) => {
  //value form context CartStateContext cart dispatchCart
  const value= useContext(CartStateContext)
  //Quantity
  const [quantity,setQuantity] = useState(1)
  //add To cart function
  const handleAddToCart =(event)=>{
    value.dispatchCart({type: 'ADD',payload:{product:props.product,quantity}})
  }
  //changeQuantitiy finction
  const handleselectProductquantity= (event)=>{
    setQuantity(event.target.value)
  }
  //return 
  return (
    <>
      {props.showPopOut ? (
        <Background>
          <ProductsWrapper>
            <ProductImg
              src={(props.product.image)}
              alt={props.product.productName}
            />
            <ProductContent>
              <h2 className={`product-title`}>
                {props.title}
                {props.product.productName}
              </h2>
              <h3 className="product-description">{props.product.productDescription}</h3>
              <div className="product-price">
                <h3 className={`product-title ptitleprops.index`}>Price: ${props.product.price}</h3>
              <div><h4>Quantity:</h4>
                <select className="select-quantity-product-pop" onChange={handleselectProductquantity}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>

                  </select>
                  </div>
                  </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
                
            </ProductContent>
            <CloseProductButton aria-label='Close Product' onClick={()=> props.setShowPopOut(prev =>!prev)}/>
          </ProductsWrapper>
        </Background>
      ) : null}
      ;
    </>
  );//end of return
};//end of function
