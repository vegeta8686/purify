package net.purify.models;

import java.math.BigInteger;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

//creating the table with name "user" in the table 
@Table(name = "user")
public class Users {
	
    @Id
    // auto increment the id value when ever new user is created
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	private String name;
	private String mail;
	private String role;
	private BigInteger mobileNo;
	private String address;
	private String password;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public BigInteger getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(BigInteger mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
