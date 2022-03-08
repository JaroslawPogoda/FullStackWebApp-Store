/**
 * 
 */
package com.capstone.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author jarek
 *
 */
@Entity
//@Table(name="products")
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String productName;
	private String productDescription;
	private double price;
	/**
	 * 
	 */
	public Product() {
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * @param id
	 * @param productName
	 * @param productDescription
	 * @param price
	 */
	public Product(int id, String productName, String productDescription, double price) {
		super();
		this.id = id;
		this.productName = productName;
		this.productDescription = productDescription;
		this.price = price;
	}

	public int getId() {
		return id;
	}
	public void setId(int pid) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	

}
