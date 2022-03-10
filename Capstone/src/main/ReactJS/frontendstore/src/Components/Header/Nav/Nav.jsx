//imports
import React from "react";
import {SiGnuprivacyguard } from 'react-icons/si'
import { NavLink } from "react-router-dom";
import {MdOutlineLogin,MdOutlineHome,MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

import './Nav.css'
//end of imports
//creating constant variable
//creating active animation
// function activeLink() {
//   list.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
// }
// list.forEach((item) => item.addEventListener("click", activeLink));
// window.addEventListener("scroll", () => {
//   let navContainer = document.querySelector("header");
//   navContainer.classList.toggle("scrolling-active", window.scrollY > 1);
// });
// declaration of Nav Component
//@params props: totalQuantity, setTotalQuantity, hideCart, setHideCart
export default function Nav(props) {
  //return
  return (
    <nav id="nav" className="navigation" role="navigation">
      <ul className="nav-ul">
        <NavLink to="./"  className="navLink">
          <li className="list" >
            <span className="icon-bar">
              <MdOutlineHome/>
            </span>
            <span className="text">Home</span>
          </li>
        </NavLink>
        <NavLink to="products" className="navLink"  >
          <li className="list">
            <span className="icon-bar">
              <MdOutlineProductionQuantityLimits/>
            </span>
            <span className="text">Products</span>
          </li>
        </NavLink>
        <NavLink to="register" className="navLink" >
          <li className="list">
            <span className="icon-bar">
              <SiGnuprivacyguard />
              </span>
            <span className="text">Register</span>
          </li>
        </NavLink>
        <NavLink to="login" className="navLink" >
          <li className="list">
          <span className="icon-bar">
            <MdOutlineLogin/>
          </span>
            <span className="text">Login</span>
          </li>
        </NavLink>
        <NavLink to="profile" className="navLink" >
          <li className="list">
          <span className="icon-bar">
            <CgProfile/>
          </span>
            <span className="text">Profile</span>
          </li>
        </NavLink>
        <div className="indicator">
          <div className="indicator-block"></div>
        </div>
      </ul>
    </nav>
  );//end of navigation
}//end of component
