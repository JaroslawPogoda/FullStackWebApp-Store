/**
 * 
 */
package com.capstone.app.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


/**
 * @author jarek
 *
 */
@Entity
//@Table(name="users")
public class Users {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String picture;
	private String email;
	private String password;
	private String name;
	private boolean admin;
	private String city;
	private String street;
	private String houseNumber;
	private	String zip;
	private String phone;
//	 email: "",
//	    userName: "",
//	    password: "",
//	    firstName: "",
//	    lastName: "",
//	    city: "",
//	    street: "",
//	    number: "",
//	    zipcode: "",
//	    phone: "",
//	    password_confirmation: "",
	@OneToMany(mappedBy="users")
	private List<Product> cartItems=new ArrayList<>();
	/**
	 *
	 */
	public Users() {
		// TODO Auto-generated constructor stub
	}
	
	
	


	





	/**
	 * @param id
	 * @param picture
	 * @param email
	 * @param password
	 * @param name
	 * @param admin
	 * @param city
	 * @param street
	 * @param houseNumber
	 * @param zip
	 * @param phone
	 * @param cartItems
	 */
	public Users(int id, String picture, String email, String password, String name, boolean admin, String city,
			String street, String houseNumber, String zip, String phone, List<Product> cartItems) {
		super();
		this.id = id;
		this.picture = picture;
		this.email = email;
		this.password = password;
		this.name = name;
		this.admin = admin;
		this.city = city;
		this.street = street;
		this.houseNumber = houseNumber;
		this.zip = zip;
		this.phone = phone;
		this.cartItems = cartItems;
	}











	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setUsername(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getStreet() {
		return street;
	}


	public void setStreet(String street) {
		this.street = street;
	}


	public String getHouseNumber() {
		return houseNumber;
	}


	public void setHouseNumber(String houseNumber) {
		this.houseNumber = houseNumber;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}


	public String getZip() {
		return zip;
	}


	public void setZip(String zip) {
		this.zip = zip;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public List<Product> getCartItems() {
		return cartItems;
	}


	public void setCartItems(List<Product> cartItems) {
		this.cartItems = cartItems;
	}

	public void addItemToCartItems(Product product) {
		this.cartItems.add(product);
	}






}
