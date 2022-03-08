/**
 * 
 */
package com.capstone.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.app.model.Users;

/**
 * @author jarek
 *
 */
@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
	List<Users> findByName(String Name);
	List<Users> findByEmail(String email);
	Long deleteByEmail(String email);
	
}
