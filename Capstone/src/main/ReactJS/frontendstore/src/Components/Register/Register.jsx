//@Objective: Register page
//imports
import React,{useState,useContext} from "react";

import './Register.css'
import {CartStateContext} from '../Layout'
import UserService from "../../Service/UserService";
//end of imports
//declaration of component
export default function Register(props) {
  //value form context CartStateContext cart and dispatchCart
  const value= useContext(CartStateContext)
  //submited state
    const [submitted,setSubmitted]=useState(false)
    //user state declaration
      const [user, setUser] = useState({
    email: "",
    password: "",
    name:"",
    city: "",
    street: "",
    houseNumber: "",
    zipcode: "",
    phone: "",
  });
  //handle submit declaration
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(UserService.register(user))
    value.dispatchCart({type:"UPDATE_TOKEN",payload:"hthatajtkjalsltj31l1lk2kj31l2up31u231p2"})
    
    setSubmitted(true)
  };
  //handlechange declaration
  const handleChange = (event) => {
      setUser({...user,[event.target.name]: event.target.value})
  }
  //return
  return (
      <div>
    {submitted?<div><h1>Thank you and Welcome</h1></div>:<div className="Register">
        <h2>Register</h2>
      <form className="RegisterForm" onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
        <input
        id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor='name'>Name</label>
        <input
        id="name"
          type="name"
          name="name"
          placeholder="name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <label htmlFor='city'>City:</label>
        <input
        id="city"
          type="city"
          name="city"
          placeholder="city"
          value={user.city}
          onChange={handleChange}
          required
        />
        <label htmlFor='street'>Street:</label>
        <input
        id="street"
          type="street"
          name="street"
          placeholder="street"
          value={user.street}
          onChange={handleChange}
          required
        />
        <label htmlFor='houseNumber'>House Number:</label>
        <input
        id="houseNumber"
          type="houseNumber"
          name="houseNumber"
          placeholder="home number"
          value={user.houseNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor='zipcode'>Zip Code:</label>
        <input
        id="zip"
          type="zip"
          name="zip"
          placeholder="Zip-code"
          value={user.zip}
          onChange={handleChange}
          required
        />
        <label htmlFor='phone'>Phone:</label>
        <input
        id = 'phone'
          type="phone"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
        id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />


        <button type="submit">Register</button>
      </form>
    </div>}
    </div>
  );//end of return
}//end of component definition
