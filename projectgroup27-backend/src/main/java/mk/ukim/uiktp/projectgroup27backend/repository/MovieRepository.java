package mk.ukim.uiktp.projectgroup27backend.repository;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import mk.ukim.uiktp.projectgroup27backend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    Movie findByName(String name);
    Set<Movie> findAllByCategoriesContaining(Category category);
}
