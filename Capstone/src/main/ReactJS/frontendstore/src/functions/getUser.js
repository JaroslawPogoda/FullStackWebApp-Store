
export default function getUser() {
//   axios()
//     .post("https://fakestoreapi.com/auth/login", {
//       username: "mor_2314",
//       password: "83r5^_",
//     })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
console.log("here")
fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .finally(()=>console.log('its done'))
            fetch('https://fakestoreapi.com/users?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))


}
