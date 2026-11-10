package com.inventory.backend.repository;


import com.inventory.backend.entity.Stock;

import org.springframework.data.jpa.repository.JpaRepository;


public interface StockRepository extends JpaRepository<Stock,Long>{


}