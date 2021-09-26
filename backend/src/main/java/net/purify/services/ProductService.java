package net.purify.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.purify.models.Product;
import net.purify.repos.ProductRepository;

@Service
public class ProductService {
//	creating a object for the product repository
	@Autowired
	private ProductRepository productRepository;
	
//    create a method that finds the product by name 
	public Product checkProductName(String productName) {
		return productRepository.findByProductName(productName);
	}
	
//    create a method that creates a new product in database
	public void newProduct(Product product) {
		productRepository.save(product);
	}
	
//	create a method that gets the products from database based on product type
	public List<Product> getProducts(String productType){
		return productRepository.findByProductType(productType);
	}

}
