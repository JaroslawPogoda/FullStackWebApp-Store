import axios from 'axios'

export default function signIn(user,setToken,dispatchCart) {
 
  console.log(user)
  
  axios.post('https://fakestoreapi.com/auth/login',{
      username: "mor_2314",
      password: "83r5^_"
        // email: ,
        // username:user.userName,
        // password:,
        // name: {
        //   firstname: user.firstName,
        //   lastname: user.lastName,
        // },
        // address: {
        //   city: user.city,
        //   street: user.street,
        //   number: user.number,
        //   zipcode: user.zipcode,
          
        // },
        // phone: user.phone,11111111
      }
    )
    .then(({ data }) => {
      console.log(data)
      setToken({token:data.token})
      dispatchCart({type:"UPDATE_TOKEN",payload:{token:data.token}})
      localStorage.setItem('token', data.token)
    })
    .catch(err => console.dir(err))
    .finally(() => console.log('done'))
}
