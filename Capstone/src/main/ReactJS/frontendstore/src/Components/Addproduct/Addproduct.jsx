import React, { useState } from "react";
import ProductService from "../../Service/ProductService";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@material-ui/core/Paper";
import "./Addproduct.css"
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
// private int id;
// 	private String productName;
// 	private String productDescription;
// 	private double price;
// 	private String category;
// 	private String productImg;
// 	private int quantity;
function Addproduct(props) {
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    price: "",
    category: "",
    productImg: "",
  });
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  let navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(product);
    await ProductService.addProduct(product);
    props.refreshProduct();
   
    navigate("../products")
  };
  const paperStyle = { padding: "20px 40px", width: "60vw", margin: "30px auto" };
  return (
    <Paper elevation={3} style={paperStyle}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
          
          <TextField
            id="productName"
            variant="standard"
            label="Product Name"
            type="productName"
            name="productName"
            placeholder="Product Name"
            value={product.productName}
            onChange={handleChange}
            required
          />
          
          <TextField
            id="productDescription"
            variant="standard"
            label="Product Description"
            type="productDescription"
            name="productDescription"
            placeholder="Product Description"
            value={product.productDescription}
            onChange={handleChange}
            required
          />
          
          <TextField
            id="price"
            variant="standard"
            label="Product Price"
            type="number"
            name="price"
            placeholder="Product Price"
            value={product.price}
            onChange={handleChange}
            required
          />
          
          <TextField
            id="category"
            variant="standard"
            label="Product Category"
            type="category"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            required
          />
          <TextField
            id="productImg"
            variant="standard"
            label="Product Image"
            type="productImg"
            name="productImg"
            placeholder="Product Image"
            value={product.productImg}
            onChange={handleChange}
            required
          />

<Button variant="contained" color="success" onClick={handleSubmit}>
  Submit
</Button>
        
      </Box>
    </Paper>
  );
}

export default Addproduct;
