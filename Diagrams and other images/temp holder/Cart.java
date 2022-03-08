/**
 * 
 */
package com.capstone.app.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author jarek
 *
 */
@Entity
//@Table(name="cart")
public class Cart {
	//poperties
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	@Autowired
	ArrayList<Product> cartItems;
	
	/**
	 * 
	 */
	public Cart() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param id
	 * @param cartItems
	 */
	public Cart(int id, ArrayList<Product> cartItems) {
		super();
		this.id = id;
		this.cartItems = cartItems;
	}

	public int getId() {
		return id;
	}

	public void setId(int cid) {
		this.id = id;
	}

	public ArrayList<Product> getCartItems() {
		return cartItems;
	}
	@Autowired
	public void setCartItems(ArrayList<Product> cartItems) {
		this.cartItems = cartItems;
	}
	

}
