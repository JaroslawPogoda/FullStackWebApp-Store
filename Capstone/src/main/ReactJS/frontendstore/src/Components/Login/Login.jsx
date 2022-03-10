import React, { useState,useEffect, useContext } from "react";
import { UserContext } from "../Layout";
import { CartStateContext } from "../Layout";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
import UserService from "../../Service/UserService";
export default function Register() {
  const value = useContext(CartStateContext);
  const valueUser = useContext(UserContext);
  const { user } = useAuth0();

  const [submitted, setSubmitted] = useState(valueUser.user.id);
  console.log(submitted)
  const [token, setToken] = useState(null);
  
  const [user1, setUser1] = useState({
    email: "",
    email_verified: false,
    family_name: "Pgda",
    given_name: "Jrslw",
    locale: "en",
    name: "Jrslw Pgd",
    nickname: "jrk10",
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14GisXeDFX6_Ai8FdT-vj8_OE665Ff-VzYuC-OS_1uA=s96-c",
    sub: "google-oauth2|116863707328513454281asdasd",
  });
  
    
    // user ? value.dispatchCart({type:"UPDATE_TOKEN",payload:user.sub}) : console.log("User-cart");
    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      setUser1({ ...user1, email_verified: true })
      setSubmitted(true);
      UserService.login(user1.email,user1.password).then(response => {
        value.dispatchCart({type:"UPDATE_TOKEN",payload:{token:"ghjksdfjna12312aklf1jb3kj1b2jkn23n1j2n3k1jn23n1k2n3kj12hvh12iu3b12hjb3j1h"}})
        console.log(response.data.cartItems)
        setUser1(response)
        valueUser.setUser(response.data);
      })
        
    };
    
    const handleChange = (event) => {
      setUser1({ ...user1, [event.target.name]: event.target.value });
    };
    const handleLogout = (event) => {
      valueUser.setUser({});
      value.dispatchCart({type:"UPDATE_TOKEN",payload:{token:""}})
      setSubmitted(false)
    }
  return (
    <div className="login">
      
      {submitted ? (
        <div>
          <h1> Welcome</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="Register">
          <h2>login</h2>
          <form className="RegisterForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={user1.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={user1.password}
              onChange={handleChange}
              required
            />

            <button type="submit">login</button>
          </form>
          <div>
        </div>
        </div>
      )}
    </div>
  );
}
