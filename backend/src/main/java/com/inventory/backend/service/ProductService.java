package com.inventory.backend.service;


import com.inventory.backend.entity.Product;
import com.inventory.backend.repository.ProductRepository;

import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ProductService {



    private final ProductRepository productRepository;



    public ProductService(ProductRepository productRepository){

        this.productRepository = productRepository;

    }



    // Get All Products

    public List<Product> getAllProducts(){

        return productRepository.findAll();

    }



    // Add Product

    public Product addProduct(Product product){

        return productRepository.save(product);

    }



    // Delete Product

    public void deleteProduct(Long id){

        productRepository.deleteById(id);

    }



    // Get Single Product

    public Product getProductById(Long id){

        return productRepository.findById(id).orElse(null);

    }



}