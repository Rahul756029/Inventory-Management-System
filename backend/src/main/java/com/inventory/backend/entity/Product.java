package com.inventory.backend.entity;


import jakarta.persistence.*;


@Entity
@Table(name="products")
public class Product {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;


    private String category;


    private String supplier;


    private double price;


    private int quantity;


    private String status;



    public Product(){

    }



    public Product(String name, String category, String supplier,
                   double price, int quantity, String status){

        this.name = name;
        this.category = category;
        this.supplier = supplier;
        this.price = price;
        this.quantity = quantity;
        this.status = status;

    }



    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }



    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }



    public String getCategory() {
        return category;
    }


    public void setCategory(String category) {
        this.category = category;
    }



    public String getSupplier() {
        return supplier;
    }


    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }



    public double getPrice() {
        return price;
    }


    public void setPrice(double price) {
        this.price = price;
    }



    public int getQuantity() {
        return quantity;
    }


    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }



    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }

}
