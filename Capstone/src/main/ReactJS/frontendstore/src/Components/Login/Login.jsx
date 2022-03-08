import React, { useState,useEffect, useContext } from "react";
import { UserContext } from "../Layout";
import signIn from "../../functions/signIn";
import { CartStateContext } from "../Layout";
import { useAuth0 } from "@auth0/auth0-react";
import LoginAuth0Button from "./LoginAuth0Button/LoginAuth0Button";
import LogoutAuth0Button from "./LogoutAuth0Button/LogoutAuth0Button";
import './Login.css'
export default function Register() {
  const value = useContext(CartStateContext);
  const valueUser = useContext(UserContext);
  const { user } = useAuth0();

  const [submitted, setSubmitted] = useState(false);
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
  const updateBoth =()=>{
    //value.dispatchCart({type:"UPDATE_TOKEN",payload:user.sub})
    valueUser.setUser(user)}
    const doNotThing=()=>{
      console.log("token" +token)
      
    }
    user ?  updateBoth(): doNotThing();
    
    // user ? value.dispatchCart({type:"UPDATE_TOKEN",payload:user.sub}) : console.log("User-cart");
    user1.email_verified ? valueUser.setUser(user1) : doNotThing();
    const handleSubmit = (event) => {
      event.preventDefault();
      signIn(user1, setToken, value.dispatchCart);
      setUser1({ ...user1, email_verified: true })
      setSubmitted(true);
    };
    
    const handleChange = (event) => {
      setUser1({ ...user1, [event.target.name]: event.target.value });
    };
    useEffect(()=>{user?value.dispatchCart({type:"UPDATE_TOKEN",payload:{token:user.sub}}):doNotThing()},[])
  return (
    <div className="login">
      
      {submitted ? (
        <div>
          <h1> Welcome</h1>
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

            <button type="submit">Register</button>
          </form>
          <div>
          {user1.email_verified ? null : <LoginAuth0Button />}
          {user ? <LogoutAuth0Button user1={user1}setUser1={setUser1}/> : null}
        </div>
        </div>
      )}
    </div>
  );
}
