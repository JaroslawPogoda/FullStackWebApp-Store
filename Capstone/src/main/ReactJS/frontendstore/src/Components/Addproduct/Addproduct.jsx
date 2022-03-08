import React,{ useState} from 'react'
import ProductService from '../../Service/ProductService'

// private int id;
// 	private String productName;
// 	private String productDescription;
// 	private double price;
// 	private String category;
// 	private String productImg;
// 	private int quantity;
function Addproduct() {
    const[product, setProduct]= useState({
        productName:"",
        productDescription:"",
        price: "",
        category: "",
        productImg: ""
        })
        const handleChange = (event) => {
            setProduct({...product,[event.target.name]:event.target.value})
        }
        const handleSubmit = (event) => {
            event.preventDefault()
            console.log(product)
            ProductService.addProduct(product);
        }
  return (
      
    
    <form className="ProductForm" onSubmit={handleSubmit}>
          <label htmlFor='productName'>productName:</label>
        <input
        id="productName"
          type="productName"
          name="productName"
          placeholder="productName"
          value={product.productName}
          onChange={handleChange}
          required
        />
        <input
        id="productDescription"
          type="productDescription"
          name="productDescription"
          placeholder="productDescription"
          value={product.productDescription}
          onChange={handleChange}
          required
        />
        <input
        id="price"
          type="price"
          name="price"
          placeholder="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
        id="category"
          type="category"
          name="category"
          placeholder="category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <input
        id="productImg"
          type="productImg"
          name="productImg"
          placeholder="productImg"
          value={product.productImg}
          onChange={handleChange}
          required
        />

    
        <button>Click me please like click me now!!!</button>
    </form>
  )
}


export default Addproduct