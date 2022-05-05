package mk.ukim.uiktp.projectgroup27backend.repository;

import mk.ukim.uiktp.projectgroup27backend.model.FavoriteMovies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteMoviesRepository extends JpaRepository<FavoriteMovies, Long> {
}
