//@Objective: Register page
//imports
import React,{useState,useContext} from "react";

import './Register.css'
import {CartStateContext} from '../Layout'
import UserService from "../../Service/UserService";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@mui/material/Button";
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
  const paperStyle = { padding: "20px 40px", width: "60vw", margin: "30px auto" };
  //return
  return (
      <div>
    {submitted?<div><h1>Thank you and Welcome</h1></div>:<div className="Register">
        <h2>Register</h2>
        <Paper elevation={3} style={paperStyle}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
          <label htmlFor='email'>Email:</label>
          <TextField
          variant="standard"
        id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor='name'>Name</label>
        <TextField
        variant="standard"
        id="name"
          type="name"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <label htmlFor='city'>City:</label>
        <TextField
        variant="standard"
        id="city"
          type="city"
          name="city"
          placeholder="City"
          value={user.city}
          onChange={handleChange}
          required
        />
        <label htmlFor='street'>Street:</label>
        <TextField
        variant="standard"
        id="street"
          type="street"
          name="street"
          placeholder="Street"
          value={user.street}
          onChange={handleChange}
          required
        />
        <label htmlFor='houseNumber'>House Number:</label>
        <TextField
        variant="standard"
        id="houseNumber"
          type="houseNumber"
          name="houseNumber"
          placeholder="Home Number"
          value={user.houseNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor='zipcode'>Zip Code:</label>
        <TextField
        variant="standard"
        id="zip"
          type="zip"
          name="zip"
          placeholder="Zip-code"
          value={user.zip}
          onChange={handleChange}
          required
        />
        <label htmlFor='phone'>Phone:</label>
        <TextField
        variant="standard"
        id = 'phone'
          type="phone"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password:</label>
        <TextField
        variant="standard"
        id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />


<Button variant="contained" color="success" onClick={handleSubmit}>
  Register
</Button>
        
      </Box>
    </Paper>
    </div>}
    </div>
  );//end of return
}//end of component definition
