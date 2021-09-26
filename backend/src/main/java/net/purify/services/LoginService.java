package net.purify.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.purify.models.Users;
import net.purify.repos.LoginRepository;

@Service
public class LoginService {
//	creating a object for the login repository
	@Autowired
	private LoginRepository loginRepository;
	
//	create a method that stores the user object in database 
	public void newUser(Users user) {
		loginRepository.save(user);
		
	}
	
//	create a method that gets all the users list 
	public List<Users> getUsers(){
		return loginRepository.findAll();
	}
	
//	create a method that gets the mail and password from user table
	public Users checkUser(Users user) {
		return loginRepository.findByMailAndPassword(user.getMail(),user.getPassword());
	}
	
//	create a method that gets the user object based on the parameter passed
	public Users checkData(String mail) {
		return loginRepository.findByMail(mail);
	}

}
