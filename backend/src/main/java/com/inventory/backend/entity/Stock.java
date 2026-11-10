package com.inventory.backend.entity;


import jakarta.persistence.*;



@Entity
@Table(name="stocks")
public class Stock {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    private String productName;


    private String category;


    private Integer quantity;


    private String status;



    public Stock(){}




    public Stock(Long id,String productName,String category,Integer quantity,String status){

        this.id=id;
        this.productName=productName;
        this.category=category;
        this.quantity=quantity;
        this.status=status;

    }




    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }



    public String getProductName() {
        return productName;
    }


    public void setProductName(String productName) {
        this.productName = productName;
    }



    public String getCategory() {
        return category;
    }


    public void setCategory(String category) {
        this.category = category;
    }



    public Integer getQuantity() {
        return quantity;
    }


    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }



    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }



}