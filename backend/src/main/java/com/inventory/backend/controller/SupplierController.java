package com.inventory.backend.controller;


import com.inventory.backend.entity.Supplier;
import com.inventory.backend.service.SupplierService;


import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/suppliers")
@CrossOrigin(origins = "http://localhost:5173")
public class SupplierController {



    private final SupplierService supplierService;



    public SupplierController(SupplierService supplierService) {

        this.supplierService = supplierService;

    }




    // GET ALL SUPPLIERS

    @GetMapping
    public List<Supplier> getAllSuppliers() {

        return supplierService.getAllSuppliers();

    }





    // GET SUPPLIER BY ID

    @GetMapping("/{id}")
    public Supplier getSupplierById(
            @PathVariable Long id
    ) {

        return supplierService.getSupplierById(id);

    }





    // ADD SUPPLIER

    @PostMapping
    public Supplier addSupplier(
            @RequestBody Supplier supplier
    ) {

        return supplierService.addSupplier(supplier);

    }





    // UPDATE SUPPLIER

    @PutMapping("/{id}")
    public Supplier updateSupplier(
            @PathVariable Long id,
            @RequestBody Supplier supplier
    ) {


        return supplierService.updateSupplier(id, supplier);

    }





    // DELETE SUPPLIER

    @DeleteMapping("/{id}")
    public String deleteSupplier(
            @PathVariable Long id
    ) {


        supplierService.deleteSupplier(id);


        return "Supplier Deleted Successfully";

    }


}