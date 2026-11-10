package com.inventory.backend.controller;

import com.inventory.backend.repository.CategoryRepository;
import com.inventory.backend.repository.ProductRepository;
import com.inventory.backend.repository.StockRepository;
import com.inventory.backend.repository.SupplierRepository;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
public class DashboardController {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final SupplierRepository supplierRepository;
    private final StockRepository stockRepository;

    public DashboardController(
            ProductRepository productRepository,
            CategoryRepository categoryRepository,
            SupplierRepository supplierRepository,
            StockRepository stockRepository) {

        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.supplierRepository = supplierRepository;
        this.stockRepository = stockRepository;
    }

    @GetMapping
    public Map<String, Long> getDashboardData() {

        Map<String, Long> dashboard = new HashMap<>();

        dashboard.put("totalProducts", productRepository.count());

        dashboard.put("totalCategories", categoryRepository.count());

        dashboard.put("totalSuppliers", supplierRepository.count());

        dashboard.put("totalStocks", stockRepository.count());

        return dashboard;
    }

}