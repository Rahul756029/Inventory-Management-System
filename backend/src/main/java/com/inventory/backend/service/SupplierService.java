package com.inventory.backend.service;


import com.inventory.backend.entity.Supplier;
import com.inventory.backend.repository.SupplierRepository;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SupplierService {


    private final SupplierRepository supplierRepository;


    public SupplierService(SupplierRepository supplierRepository) {

        this.supplierRepository = supplierRepository;

    }



    public List<Supplier> getAllSuppliers() {

        return supplierRepository.findAll();

    }



    public Supplier getSupplierById(Long id) {

        return supplierRepository.findById(id)
                .orElse(null);

    }



    public Supplier addSupplier(Supplier supplier) {

        return supplierRepository.save(supplier);

    }



    public Supplier updateSupplier(Long id, Supplier supplier) {


        Supplier existingSupplier = getSupplierById(id);


        if(existingSupplier != null) {


            existingSupplier.setName(supplier.getName());

            existingSupplier.setCompany(supplier.getCompany());

            existingSupplier.setEmail(supplier.getEmail());

            existingSupplier.setPhone(supplier.getPhone());


            return supplierRepository.save(existingSupplier);

        }


        return null;

    }




    public void deleteSupplier(Long id) {

        supplierRepository.deleteById(id);

    }


}