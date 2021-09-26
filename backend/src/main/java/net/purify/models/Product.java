package net.purify.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

//creating the table with name "product" in the table 
@Table(name = "product")
public class Product {
	
	   @Id
	    // auto increment the id value when ever new user is created
	   @GeneratedValue(strategy = GenerationType.AUTO)
	   private int productId;
	   private String productName;
	   private double productCost;
	   private String seller;
	   private long productReview;
	   private String productImage;
	   private String productType;
	   
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getProductCost() {
		return productCost;
	}
	public void setProductCost(long productCost) {
		this.productCost = productCost;
	}
	public String getSeller() {
		return seller;
	}
	public void setSeller(String seller) {
		this.seller = seller;
	}
	public long getProductReview() {
		return productReview;
	}
	public void setProductReview(int productReview) {
		this.productReview = productReview;
	}
	public String getProductImage() {
		return productImage;
	}
	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}

}
