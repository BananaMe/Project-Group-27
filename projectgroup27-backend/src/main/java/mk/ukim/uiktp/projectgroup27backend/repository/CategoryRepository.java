package mk.ukim.uiktp.projectgroup27backend.repository;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
