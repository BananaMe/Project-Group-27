package mk.ukim.uiktp.projectgroup27backend.services;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import mk.ukim.uiktp.projectgroup27backend.model.dto.CategoryDto;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> findAll();
    Optional<Category> createCategory(CategoryDto categoryDto);
}
