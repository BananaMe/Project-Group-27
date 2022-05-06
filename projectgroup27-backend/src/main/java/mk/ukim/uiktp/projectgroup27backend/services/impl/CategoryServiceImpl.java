package mk.ukim.uiktp.projectgroup27backend.services.impl;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import mk.ukim.uiktp.projectgroup27backend.model.Movie;
import mk.ukim.uiktp.projectgroup27backend.model.dto.CategoryDto;
import mk.ukim.uiktp.projectgroup27backend.repository.CategoryRepository;
import mk.ukim.uiktp.projectgroup27backend.services.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }

    @Override
    public Optional<Category> createCategory(CategoryDto categoryDto) {
        Category category = new Category(categoryDto.getName(), categoryDto.getDescription());
        return Optional.of(this.categoryRepository.save(category));
    }
}
