package mk.ukim.uiktp.projectgroup27backend.repository;

import mk.ukim.uiktp.projectgroup27backend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    Movie findByName(String name);
}
