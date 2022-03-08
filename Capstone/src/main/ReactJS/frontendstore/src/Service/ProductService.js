
import axios from 'axios';

const PRODUCT_API_BASE_URL= "http://localhost:8080/api/products";
class ProductService{
    getAllProducts(){
        return axios.get(PRODUCT_API_BASE_URL+"/allproducts")
    }
    getProductById(id){
       return axios.get(PRODUCT_API_BASE_URL+`/product/${id}`);
    }
    getProductByName(name){
        return axios.get(PRODUCT_API_BASE_URL+`/product/${name}`);
     }
    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URL+"/addproduct",product);
    }
    updateProduct(product,id){
        return axios.put(PRODUCT_API_BASE_URL+"/product/"+id,product);
    }

    deleteProduct(id){
        return axios.delete(PRODUCT_API_BASE_URL+"/product/"+id);
    }

}

export default new ProductService();