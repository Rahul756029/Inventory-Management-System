package com.inventory.backend.controller;

import com.inventory.backend.entity.Category;
import com.inventory.backend.service.CategoryService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin("*")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // GET ALL CATEGORIES

    @GetMapping
    public List<Category> getAllCategories() {

        return categoryService.getAllCategories();

    }

    // GET CATEGORY BY ID

    @GetMapping("/{id}")
    public Category getCategoryById(
            @PathVariable Long id
    ) {

        return categoryService.getCategoryById(id);

    }

    // ADD CATEGORY

    @PostMapping
    public Category addCategory(
            @RequestBody Category category
    ) {

        return categoryService.addCategory(category);

    }

    // UPDATE CATEGORY

    @PutMapping("/{id}")
    public Category updateCategory(
            @PathVariable Long id,
            @RequestBody Category category
    ) {

        Category existingCategory =
                categoryService.getCategoryById(id);

        if (existingCategory != null) {

            existingCategory.setName(category.getName());
            existingCategory.setProducts(category.getProducts());

            return categoryService.addCategory(existingCategory);

        }

        return null;

    }

    // DELETE CATEGORY

    @DeleteMapping("/{id}")
    public String deleteCategory(
            @PathVariable Long id
    ) {

        categoryService.deleteCategory(id);

        return "Category Deleted Successfully";

    }

}
