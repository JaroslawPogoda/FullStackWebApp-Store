//@Objective Bridging all components and context data and states together
//imports
import React,{useState,useEffect,useReducer,createContext} from "react";
import {  Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import getDataAllProducts from '../functions/getDataAllProducts'

import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import Register from "./Register/Register";
import Login from "./Login/Login";
import cartReducer from "../functions/cartReducer";
import Checkout from './Checkout/Checkout'
//import getDataAllProductShopAPI from '../functions/getDataAllProducts-shop-api'
import './Layout.css'
import Addproduct from "./Addproduct/Addproduct";
import Profile from './Profile/Profile';
import Error from "./Error/Error";
//end of Imports
//exports
export const UserContext = createContext()
export const CatContext= React.createContext();
export const CartStateContext = createContext()
export const CartDispatchContext = createContext()
//end of exports
//definition of Layout
export default function Layout(props) {
  //definition of user3 state
  const [user3,setUser]= useState({})
  //intialization of all Products state
  const [allProducts, setAllProducts] = useState([]);
  //intialization of allcategories state
  const [categories, setAllCategory] = useState([])
  //intialization of cart and 
  const [cart,dispatchCart]=useReducer(cartReducer,{products:[],userToken:null});
  const filterout=(id)=>{
    console.log(id)
    setAllProducts(allProducts.filter(product=>product.id!=id
      ))
  }
  const refreshProduct=()=>{
    getDataAllProducts(setAllProducts)
  }
  useEffect(() => {
    getDataAllProducts(setAllProducts);
   
    //getDataAllProductShopAPI(setAllProducts)
    // createUser()
    // getUser()
  }, []);
  // {user?dispatchCart({type:"UPDATE_TOKEN",payload:{token:user.sub}}):console.log('not logged in')}
  // {user?setUser(user):console.log('not logged in')}
  return (
    <div className="Layout">
        
      <UserContext.Provider value={{user:user3, setUser:setUser}}>
      <CatContext.Provider value={{categories:categories, setCategories:setAllCategory}}>
      <CartStateContext.Provider value={{cart:cart,dispatchCart:dispatchCart}}>
      <Header />
      <div className="body-parts">
      <Routes>
        <Route path={""} element={<Products allProducts={allProducts} setAllProducts={setAllProducts} filterout={filterout} refreshProduct={refreshProduct}/>} />
        <Route path={"products"} element={<Products allProducts={allProducts} setAllProducts={setAllProducts} filterout={filterout} refreshProduct={refreshProduct}/>} />
        <Route path={"register"} element={<Register/>}/>
        <Route path={"login"} element={<Login/>}/>
        <Route path={"checkout"} element={<Checkout/>}/>
        <Route path={"profile"} element={<Profile />}/>
        <Route path={"/addproduct"} element={<Addproduct refreshProduct={refreshProduct}/>}/>
        <Route path={"products/addproduct"} element={<Addproduct refreshProduct={refreshProduct}/>}/>
        <Route path={'*'} element={<Error />}/>

      </Routes>
      </div>
      <Footer/>
      </CartStateContext.Provider>
      </CatContext.Provider>
      </UserContext.Provider>
      </div>
  );
}






