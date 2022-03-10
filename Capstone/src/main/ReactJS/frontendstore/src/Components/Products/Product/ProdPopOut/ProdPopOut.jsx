//@OBjective: Popout component with more information and buttons
//import
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import ProductService from "../../../../Service/ProductService";

import { CartStateContext } from "../../../Layout";
import { UserContext } from "../../../Layout";
//end of import
//styled components Background
const Background = styled.div`
  width: 100%;
  heights: 100%;

  position: absolute;
  display: flex;
  justify-content: center;
  aligh-item: center;
`
//Styled component ProductsWrapper
const ProductsWrapper = styled.div`
  padding: 20px 10px 20px 10px;
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
`
// styled img component ProductImg
const ProductImg = styled.img`
  width: 300px;
  height: 460px;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: cover;
`

const ProductButton = styled.button`
margin-left: 2px;
margin-right: 2px;
margin-top: 10px;
padding: 10px 24px;
background: #141414;
color: #fff;
border: none;
`
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
    border-radius:4px;
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  button &:hover {
    background:#fff;
  }
`
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
  transition: all 300ms;
  &:hover {
    transform: scale(1.07);
    transition: all 300ms;
    color: #020510;
  }
`
const DeleteButton = styled.button`
margin-left: 2px;
margin-right: 2px;
margin-top: 10px;
padding: 10px 24px;
background: red;
color: #fff;
border: none;
`
//declaration of popout componendt
export const ProdPopOut = (props) => {
  //value form context CartStateContext cart dispatchCart
  const value = useContext(CartStateContext);
  const user = useContext(UserContext);
  //Quantity
  const [update,setUpdate]=useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(props.product)
  //add To cart function
  const handleAddToCart = async(event) => {
    let product = props.product
    product.quantity=quantity
    value.dispatchCart({
      type: "ADD",
      payload: { product: product, quantity,email:user.user.email },
    })
  }
  //changeQuantitiy finction
  const handleselectProductquantity = (event) => {
    setQuantity(event.target.value)
  }
  const onClickHandlerdelete = async (event) => {
    await ProductService.deleteProduct(props.product.id);

    props.filterout(props.product.id)
  }
  const onClickHandlerupdate = async (event) => {
    setUpdate(!update)
    await ProductService.updateProduct(product,product.id)
    props.refreshProduct()
    
  }
  const onChange = async (event) => {
    setProduct({...product,[event.target.name]: event.target.value}) 
  }
  //return
  return (
    <>
      {props.showPopOut ? (
        <Background>
          <ProductsWrapper>
          {update?<input type="text" name="productImg" value={product.productImg} onChange={onChange}></input> :<span><ProductImg
              src={props.product.productImg}
              alt={product.productName}
            /></span>}
            <ProductContent>
              <h2 className={`product-title`}>
                
                {update?<input type="text" name="productName" value={product.productName} onChange={onChange}></input> :<span>{props.product.productName}</span>}
              </h2>
              <h3 className="product-description">
              {update?<input type="text" name="productDescription" value={product.productDescription} onChange={onChange}></input> :<span>{props.product.productDescription}</span>}
              </h3>
              <div className="product-price">
                <h3 className={`product-title ptitleprops.index`}>
                  Price: ${update?<input type="number" name="price" value={product.price} onChange={onChange}></input> :<span>{props.product.price}</span>}
                </h3>
                <div>
                  <h4>Quantity:</h4>
                  <select
                    className="select-quantity-product-pop"
                    onChange={handleselectProductquantity}
                  >
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
              
              <div>
                <button onClick={handleAddToCart}>Add to Cart</button>
                {update?<ProductButton className="updatebtn" onClick={onClickHandlerupdate}>submit</ProductButton>:<ProductButton className="updatebtn" onClick={()=>{setProduct(props.product);setUpdate(!update)}}>update</ProductButton>}
                  
                  <DeleteButton  className="deletebtn" onClick={onClickHandlerdelete}>delete</DeleteButton>
                 </div>
            </ProductContent>
            <CloseProductButton
              aria-label="Close Product"
              onClick={() => props.setShowPopOut((prev) => !prev)}
            />
             
          </ProductsWrapper>
        </Background>
      ) : null}
      
    </>
  ) //end of return
} //end of function
