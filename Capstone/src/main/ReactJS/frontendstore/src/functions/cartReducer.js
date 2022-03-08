

export default function cartReducer(state, action) {
   
switch (action.type) {
    case "ADD":
        {
            let indextem=0
            if(state.products.length <= 0) {
                console.log(action.payload.quantity)
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

            
            else{
                console.log('third')
                return {...state,products:[...state.products,{...action.payload.product,quantity:action.payload.quantity}]}
            }
        }
        case "CHANGEQTY":{
            let indextem=0;
            if(state.products.length <= 0) {
                console.log(action.payload.quantity)
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