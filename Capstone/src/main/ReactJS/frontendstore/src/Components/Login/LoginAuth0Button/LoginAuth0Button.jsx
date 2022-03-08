//objectiove using auth0 to login
//imports
import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
//declaration of component button
const LoginAuth0Button = () => {
  //retringing login
    const {loginWithRedirect}= useAuth0()
    //handleon click finction
    const handleClick=()=>{
        
        loginWithRedirect()
    }

    //return
  return <button onClick={handleClick}>Login with Auth0</button>;
};// end of component

export default LoginAuth0Button;
