import axios from 'axios'
export default function createUser(user,dispatchCart) {
  console.log(user)
  let email=user.email
  let password=user.password
  axios({
    method: 'POST',
    baseURL: 'http://api.fakeshop-api.com',
    url: '/users/signup',
    data:{
      
      email,
      password
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
    })
    .then(({ data }) => {
      console.log(data)
      dispatchCart({type:"UPDATE_TOKEN",payload:{token:data.token}})
      localStorage.setItem('token', data.token)
    })
    .catch(err => console.dir(err))
    .finally(() => console.log('done'))
}
