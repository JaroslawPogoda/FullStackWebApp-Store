//@Objective: profile information
//imports 
import React,{useContext} from 'react';
import {UserContext} from '../Layout'
import {useAuth0} from '@auth0/auth0-react'
import './Profile.css'
//end of imports
//definition of Profile Complonent
function Profile() {
  //value context UserContext user setUser
    const value= useContext(UserContext)
    //get user out of Auth0
    const {user} = useAuth0()
    //set user if user exists
    user?value.setUser(user):console.log(value)
    //return
  return <div className="profile">
      {value.user.name?<div className="profile-items">
      <img src={value.user.picture} alt={"profile"}/>
      <h2>Name:{value.user.name}</h2>
      </div>:null}
  </div>;//end of return 
}// end of profile declaration

export default Profile;
