import UserService from "../Service/UserService"


export default function cartReducer(state, action) {
   
switch (action.type) {
    case "ADD":
        {
            let indextem=0
            if(state.products.length <= 0) {
                console.log(action.payload.quantity)
                UserService.updateCart(action.payload.email,{cartItems:[...state.products]})
                console.log ({cartItems:[...state.products]})
                return {...state,products:[{...action.payload.product,quantity:action.payload.quantity}]}
            }
            else if(state.products.find((product,index)=>{if(product.id === action.payload.product.id){
                indextem=index
                UserService.updateCart(action.payload.email,{cartItems:[...state.products]})
                console.log ({cartItems:[...state.products]})
                return true
            }return false}))
            {
                state.products[indextem].quantity=action.payload.quantity
                UserService.updateCart(action.payload.email,{cartItems:[...state.products]})
                console.log ({cartItems:[...state.products]})
                return {...state}
            }

            
            else{
                console.log('third')
                UserService.updateCart(action.payload.email,{cartItems:[...state.products]})
                console.log ({cartItems:[...state.products]})
                return {...state,products:[...state.products,{...action.payload.product,quantity:action.payload.quantity}]}
            }

        }
        case "CHANGEQTY":{
            let indextem=0;
            if(state.products.length <= 0) {
                console.log(action.payload.quantity)
                UserService.updateCart(action.payload.email,{cartItems:[...state.products]})
                return {...state,products:[{...action.payload.product,quantity:action.payload.quantity}]}
            }
            else if(state.products.find((product,index)=>{if(product.id === action.payload.product.id){
                indextem=index
                return true
            }return false}))
            {
                state.products[indextem].quantity=action.payload.quantity
                return {...state}
            }

       }
       case "REMOVE":
           {   
                UserService.updateCart(action.payload.email,{cartItems:[...state.products]})
               return{...state,products:[...state.products.filter((product,index)=>product.id===action.payload.product.id?false:true)]}
           }
        case "UPDATE_TOKEN":
            {
                return {...state,token:action.payload.token}
            }
       default:{
           console.log('error in reducer')
           break;
       }
    }
}