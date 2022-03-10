/**
 * 
 */
package com.capstone.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	private String category;
	private String productImg;
	private int quantity;
	@ManyToOne
    @JoinColumn(name="id", nullable=false)
    private Users users;
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
	 * @param category
	 * @param productImg
	 * @param quantity
	 * @param users
	 */
	public Product(int id, String productName, String productDescription, double price, String category,
			String productImg, int quantity, Users users) {
		super();
		this.id = id;
		this.productName = productName;
		this.productDescription = productDescription;
		this.price = price;
		this.category = category;
		this.productImg = productImg;
		this.quantity = quantity;
		this.users = users;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
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

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getProductImg() {
		return productImg;
	}

	public void setProductImg(String productImg) {
		this.productImg = productImg;
	}

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	

}
