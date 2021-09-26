package net.purify.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.purify.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	public Product findByProductName(String productName);

	public List<Product> findByProductType(String productType);


}
