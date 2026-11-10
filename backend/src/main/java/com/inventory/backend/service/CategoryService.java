package com.inventory.backend.service;

import com.inventory.backend.entity.Category;
import java.util.List;

public interface CategoryService {

    List<Category> getAllCategories();

    Category getCategoryById(Long id);

    Category addCategory(Category category);

    void deleteCategory(Long id);

}