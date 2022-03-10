/**
 * 
 */
package com.capstone.app.controller;

import java.util.List;

import javax.transaction.Transactional;

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

import com.capstone.app.exception.InvalidLoginException;
import com.capstone.app.exception.ResourceNotFoundException;
import com.capstone.app.model.Product;
import com.capstone.app.model.Users;
import com.capstone.app.repository.UserRepository;

/**
 * @author jarek
 *
 */
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class UserController {
	@Autowired
	private UserRepository userRepo;
	/**
	 * 
	 */
	
//	@GetMapping("/user/{id}")
//	public ResponseEntity<Users> getUsersById(@PathVariable int id) {
//		Users user= userRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("User not found"));
//		return ResponseEntity.ok(user);  
//	}
	@GetMapping("/user/{email}")
	public Users getUsersByEmail(@PathVariable String email){
		List <Users> users=userRepo.findByEmail(email);
		if(users.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Users(s) with the email "+ email +" not found"));
		}
		
		return userRepo.findByEmail(email).get(0);
	}
	@PostMapping("register")
    public Users newUser(@RequestBody Users user)
    {
		return userRepo.save(user);
    }
	@PutMapping("/user/{email}")
	public ResponseEntity<Users> updateUsers(@PathVariable String email, @RequestBody Users user)
	{
		List <Users> users=userRepo.findByEmail(email);
		if(users.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Users(s) with the email "+ email +" not found"));
		}
		Users u =users.get(0);
		u.setName(user.getName());
		u.setPicture(user.getPicture());
		u.setCity(user.getCity());
		u.setPhone(user.getPhone());
		u.setHouseNumber(user.getHouseNumber());
		u.setStreet(user.getStreet());
		u.setZip(user.getZip());
	    Users updatedUser=userRepo.save(u);
	    return ResponseEntity.ok(updatedUser);
	}
	@DeleteMapping("/user/{email}")
	@Transactional 
	public String deleteUser(@PathVariable String email)
	{
		List <Users> users=userRepo.findByEmail(email);
		if(users.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Users(s) with the email "+ email +" not found"));
		}
		userRepo.deleteByEmail(email);
	    return "The prodcuct with id: "+email +" is removed from the database.";
	}
	@PutMapping("/user/{email}/cart")
	public ResponseEntity<List<Product>> updateCart(@PathVariable String email, @RequestBody Users user)
	{
		List <Users> users=userRepo.findByEmail(email);
		if(users.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Users(s) with the email "+ email +" not found"));
		}
		
		Users u =users.get(0);
		u.setCartItems(user.getCartItems());
	    Users updatedUser=userRepo.save(u);
	    for(int i =0;i<updatedUser.getCartItems().size();i++) {
	    	System.out.println(updatedUser.getId());
			System.out.println(updatedUser.getCartItems().get(i).getId());
		}
	    return ResponseEntity.ok(updatedUser.getCartItems());
	}
	@PostMapping("/user/login/{email}")
	public ResponseEntity<Users> login(@PathVariable String email,@RequestBody String password){
		List <Users> users=userRepo.findByEmail(email);
		if(users.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Users(s) with the email "+ email +" not found"));
			
		}
		Users user = users.get(0);
		
		if(user.getPassword().equals(password.substring(0, password.length()-1))) {
			return ResponseEntity.ok(user);
		}
		else {
			
			//loginerror("Login Invalid password does not match");
			return null;
		}
		
	}
	public String loginerror(String error) {
		return error;
		
	}
}
