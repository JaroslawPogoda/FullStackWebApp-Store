/**
 * 
 */
package com.capstone.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.app.exception.ResourceNotFoundException;
import com.capstone.app.model.Product;
import com.capstone.app.model.Users;
import com.capstone.app.repository.ProductRepository;

/**
 * @author jarek
 *
 *
 */
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/products/")
public class ProductController {
	@Autowired
	private ProductRepository productRepo;
	
	/**
	 * 
	 */
	@GetMapping("/allproducts")
	public List<Product> getAllUsers(){
		return productRepo.findAll();
	}
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id) {
		Product productTest = productRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Product at the id:"+id+" was not found."));
		return ResponseEntity.ok(productTest);
	}
	@PostMapping("/addproduct")
    public Product newPorduct(@RequestBody Product prod)
    {
		return productRepo.save(prod);
    }
	@PutMapping("/product/{id}")
	public ResponseEntity<Product> updateStudent(@PathVariable int id, @RequestBody Product product)
	{
		Product prod= productRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Product not found at id "+id));
	    prod.setProductName(product.getProductName());
	    prod.setProductDescription(product.getProductDescription());
	    prod.setPrice(product.getPrice());
	    prod.setCategory(product.getCategory());
	    prod.setProductImg(product.getProductImg());
	    Product updatedProduct=productRepo.save(prod);
	    return ResponseEntity.ok(updatedProduct);
	}
	@DeleteMapping("/product/{id}")
	public String deleteStudent(@PathVariable int id)
	{
		productRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Product not found at id "+id));
	    productRepo.deleteById(id);
	    return "The prodcuct with id: "+ id +" is removed from the database.";
	}
	
}
