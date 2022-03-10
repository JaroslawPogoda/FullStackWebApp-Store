/**
 * 
 */
package com.capstone.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author jarek
 *
 */
@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class InvalidLoginException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -9166872005652218288L;

	/**
	 * 
	 */
	public InvalidLoginException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

}
