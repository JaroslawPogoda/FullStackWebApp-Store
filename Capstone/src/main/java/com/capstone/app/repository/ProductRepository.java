/**
 * 
 */
package com.capstone.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.app.model.Product;


/**
 * @author jarek
 *
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>  {
	List<Product> getByProductName(String productName);
}
