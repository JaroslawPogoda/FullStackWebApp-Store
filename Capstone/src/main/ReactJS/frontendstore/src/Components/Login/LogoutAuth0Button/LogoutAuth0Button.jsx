//Objective: logout button from both 
//impors 
import React,{useContext} from 'react';
import {useAuth0} from '@auth0/auth0-react'
import {UserContext} from '../../Layout'
//end of imports 
//declaration of Logout componentn
//@params props: setUser1 user
const LogoutAuth0Button = (props) => {
  // declaration value UserContext setUser and user 
    const value = useContext(UserContext)
    //initialization for Auth0 logout
    const {logout} = useAuth0()
    //declaration of handleLogOut
    const handleLogout=()=>{
        value.setUser(null)
        props.setUser1({...props.user,email_verified: false})
        logout()
    }
    //return
  return <button onClick={handleLogout}>Logout</button>;
};//end of component declaration

export default LogoutAuth0Button;
