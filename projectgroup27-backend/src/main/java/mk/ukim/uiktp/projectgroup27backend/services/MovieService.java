package mk.ukim.uiktp.projectgroup27backend.services;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import mk.ukim.uiktp.projectgroup27backend.model.Movie;
import mk.ukim.uiktp.projectgroup27backend.model.dto.MovieDto;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    List<Movie> findAll();
    Optional<Movie> findById(Long id);
    Optional<Movie> findByName(String name);

    Optional<Movie> save(MovieDto movieDto);
    Optional<Movie> edit(Long id, MovieDto movieDto);

    void deleteById(Long id);

    void addToFavorites(Long movieId, String username);

    List<Movie> getFavorites(String username);

    void removeMovieFromFavorites(Long movieId, String username);
}
