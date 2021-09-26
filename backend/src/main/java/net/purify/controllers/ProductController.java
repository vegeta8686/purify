package net.purify.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.purify.models.Product;
import net.purify.models.Responses;
import net.purify.repos.ProductRepository;
import net.purify.services.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductController {
//	create a object for the product service in order to utilize those methods 
	@Autowired
	private ProductService productService;
	@Autowired
	ProductRepository productRepos;
	
//	create a method that post the data of product to product service
	@PostMapping("/addProduct")
	public Object addProduct(@RequestBody Product product) {
		Responses response = new Responses();
		if(product.getProductName() != null && product.getProductCost() != 0 && product.getSeller() !=null) {
			if(productService.checkProductName(product.getProductName()) == null) {				
				productService.newProduct(product);
				return product;
			}else {
			response.setMessage("Product Already Exist");
			response.setStatus(406);
			return response; 
			}
		}else {
			response.setMessage("Not Acceptable");
			response.setStatus(406);
            return response; 
		}
	}
   
//	create a method that gets the products based on the type which is passed from frontend
	@GetMapping("/getProducts/{productType}/{role}")
	public List<?> getProduct(@PathVariable(value="productType",required = true) String productType, @PathVariable(value="role",required = false) String role){		
		Responses response = new Responses();
		ArrayList<Responses> responseList = new ArrayList<>();
		response.setMessage("No Products Found");
		response.setStatus(404);
		responseList.add(response);
		if(productType != null && role.equals("SUPER ADMIN")) {
			List<Product> list = productService.getProducts(productType);	
			if(list.size() != 0) {
				return list;						
			}return responseList;
		}return responseList;
	}
}
