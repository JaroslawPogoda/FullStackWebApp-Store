
import ProductService from '../Service/ProductService';


export default function getDataAllProduct(setAllProducts){
  ProductService.getAllProducts()
        .then(response =>{
          console.log(response.data)
          setAllProducts(response.data)})
        .catch(error => console.error(error))
        .finally(() => console.log('done'));
}