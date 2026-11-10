package com.inventory.backend.controller;


import com.inventory.backend.entity.Product;
import com.inventory.backend.service.ProductService;


import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {



    private final ProductService productService;



    public ProductController(ProductService productService){

        this.productService = productService;

    }



    // GET ALL PRODUCTS

    @GetMapping
    public List<Product> getAllProducts(){

        return productService.getAllProducts();

    }




    // GET PRODUCT BY ID

    @GetMapping("/{id}")
    public Product getProductById(
            @PathVariable Long id
    ){

        return productService.getProductById(id);

    }





    // ADD PRODUCT

    @PostMapping
    public Product addProduct(
            @RequestBody Product product
    ){

        return productService.addProduct(product);

    }






    // UPDATE PRODUCT

    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable Long id,
            @RequestBody Product product
    ){


        Product existingProduct =
                productService.getProductById(id);



        if(existingProduct != null){


            existingProduct.setName(product.getName());

            existingProduct.setCategory(product.getCategory());

            existingProduct.setSupplier(product.getSupplier());

            existingProduct.setPrice(product.getPrice());

            existingProduct.setQuantity(product.getQuantity());

            existingProduct.setStatus(product.getStatus());


            return productService.addProduct(existingProduct);

        }


        return null;

    }







    // DELETE PRODUCT

    @DeleteMapping("/{id}")
    public String deleteProduct(
            @PathVariable Long id
    ){

        productService.deleteProduct(id);


        return "Product Deleted Successfully";

    }



}