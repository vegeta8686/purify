package net.purify.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.purify.models.Responses;
import net.purify.models.Users;
import net.purify.repos.LoginRepository;
import net.purify.services.LoginService;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
//	create a object for the login service 
	@Autowired
	private LoginService loginService;
	@Autowired
	LoginRepository login;
	

//	create a method that sends the new user object to login service method 
	@PostMapping("/addUser")
	public Object newUser(@RequestBody Users user) {
		Responses response = new Responses();
		if(user.getMail() != null && user.getPassword() != null && user.getRole() != null && loginService.checkUser(user) == null) {
			if(loginService.checkData(user.getMail()) == null) {				
				loginService.newUser(user);
				return user;
			}else {
			response.setMessage("User Already Exist");
			response.setStatus(406);
			return response; 
			}
		}else {
			response.setMessage("Not Acceptable");
			response.setStatus(406);
            return response; 
		}
		 
	}
  
//	getting all the users list 
	@GetMapping("/getUsers")
	public List<?> getAll(@RequestBody Users user){
		if(user.getRole().contentEquals("SUPER ADMIN")) {
			return loginService.getUsers();			
		}else {
			Responses response = new Responses();
			response.setMessage("Access Denied!");
			response.setStatus(401);
			ArrayList<Responses> list = new ArrayList<>();
			list.add(response);
			return list;
		}
	}
	
//	create a method that checks the user is exist or not 
	@PostMapping("/login")
	public Object checkMailAndPassword(@RequestBody Users user) {
		Users userObj = loginService.checkUser(user);
		if(userObj != null) {
			return userObj;
		}else {
			Responses response = new Responses();
			response.setMessage("UnAuthorized, Access is denied!");
			response.setStatus(401);
			return response;
		}
	}
	
//	create a methods that return the specific user based on id 
	
	
	
}
