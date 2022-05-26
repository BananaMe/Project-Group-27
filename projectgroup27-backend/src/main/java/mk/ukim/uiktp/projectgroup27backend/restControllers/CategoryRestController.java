package mk.ukim.uiktp.projectgroup27backend.restControllers;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import mk.ukim.uiktp.projectgroup27backend.model.dto.CategoryDto;
import mk.ukim.uiktp.projectgroup27backend.services.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryRestController {

    private final CategoryService categoryService;


    public CategoryRestController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> findAll(){
        return this.categoryService.findAll();
    }

    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody CategoryDto categoryDto){
        return this.categoryService.createCategory(categoryDto)
                .map(category -> ResponseEntity.ok().body(category))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
