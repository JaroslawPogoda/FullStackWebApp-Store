//@Objective: profile information
//imports 
import React,{useContext,useState} from 'react';
import {UserContext} from '../Layout'
import {useAuth0} from '@auth0/auth0-react'
import './Profile.css'
import {GrDocumentUpdate} from 'react-icons/gr'
import UserService from '../../Service/UserService';
import {TiUserDelete} from 'react-icons/ti'

//end of imports
//definition of Profile Complonent
function Profile() {
  //value context UserContext user setUser
    const value= useContext(UserContext)
    const [update, setUpdate]=useState(false)
    const [user,setUser] = useState(value.user)
    const [passwordUpdate,setThePasswordUpdate] = useState(false)
    //get user out of Auth0
    const handleChange = (event) => {
      setUser({...user,[event.target.name]: event.target.value})
  }
  console.log(user)
    const handleSubmit = async (event) => {
      event.preventDefault()
      await UserService.updateUser(user,user.email).then(res=>value.setUser(res.data))
      UserService.getUserByEmail(user.email).then(res => setUser(res.data))
      setUpdate(!update)
    }
    const handleSubmitPassword=(event)=>{
      event.preventDefault()
      
    }
    const handleDelete=(event)=>{
      UserService.deleteUser(user.email)
      value.setUser({})
      setUser({})
    }
    //return
  return <div className="profile">
    {value.user.name?<>
      <GrDocumentUpdate className="profile-update" onClick={()=>setUpdate(!update)}/>
      <TiUserDelete className="profile-delete" onClick={handleDelete}/>
    {update?<form className="UpdateUserForm" onSubmit={handleSubmit}>
    <label htmlFor='picture'>picture:</label>
        <input
        id="picture"
          type="picture"
          name="picture"
          placeholder="picture"
          value={user.picture}
          onChange={handleChange}
          
        />
          <label htmlFor='email'>Email:</label>
        <input
        id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          disabled
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
        
        <button>Save</button>
        </form>
        :
      <div className="profile-items">
      <img src={user.picture} alt={"profile"}/>
      <h2>Name:{user.name}</h2>
      <h3>Address:</h3>
      <h4>{value.user.houseNumber} {user.street}<br/></h4>
      <h4>City: {user.city} Zip Code: {user.zip}</h4>
      <h4>Phone: {user.phone}</h4>
      </div>}</>:null}
      {passwordUpdate?<form className="UpdateUserForm" onSubmit={handleSubmitPassword}>
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
        <button>Save</button>
        </form>:null}
  </div>;//end of return 
}// end of profile declaration

export default Profile;
