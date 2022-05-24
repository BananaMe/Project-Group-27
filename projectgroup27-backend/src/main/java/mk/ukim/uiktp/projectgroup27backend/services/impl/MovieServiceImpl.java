package mk.ukim.uiktp.projectgroup27backend.services.impl;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import mk.ukim.uiktp.projectgroup27backend.model.Movie;
import mk.ukim.uiktp.projectgroup27backend.model.User;
import mk.ukim.uiktp.projectgroup27backend.model.dto.MovieDto;
import mk.ukim.uiktp.projectgroup27backend.model.exceptions.MovieNotFoundException;
import mk.ukim.uiktp.projectgroup27backend.repository.CategoryRepository;
import mk.ukim.uiktp.projectgroup27backend.repository.MovieRepository;
import mk.ukim.uiktp.projectgroup27backend.repository.UserRepository;
import mk.ukim.uiktp.projectgroup27backend.services.MovieService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public MovieServiceImpl(MovieRepository movieRepository, CategoryRepository categoryRepository, UserRepository userRepository) {
        this.movieRepository = movieRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }


    @Override
    public List<Movie> findAll() {
        return this.movieRepository.findAll();
    }

    @Override
    public List<Movie> findByCategories(List<Long> categoryIds) {
        List<Category> categories = categoryRepository.findAllById(categoryIds);
        List<Movie> movies = this.movieRepository.findAll();
        List<Movie> filteredMovies = new ArrayList<>();
        for (Movie m: movies) {
            if(m.getCategories().containsAll(categories)){
                filteredMovies.add(m);
            }
        }
        return filteredMovies;
    }

    @Override
    public Optional<Movie> findById(Long id) {
        return this.movieRepository.findById(id);
    }

    @Override
    public Optional<Movie> findByName(String name) {
        Movie movie = this.movieRepository.findByName(name);
        return Optional.of(movie);
    }

    @Override
    public Optional<Movie> save(MovieDto movieDto) {
        List<Category> categories = this.categoryRepository.findAllById(movieDto.getCategoriesIds());
        Movie movie = new Movie(movieDto.getName(), movieDto.getRating(), movieDto.getPlot(), categories, movieDto.getImage());
        this.movieRepository.delete(movie);
        return Optional.of(this.movieRepository.save(movie));
    }

    @Override
    public Optional<Movie> edit(Long id, MovieDto movieDto) {
        List<Category> categories = this.categoryRepository.findAllById(movieDto.getCategoriesIds());
        Movie movie = this.movieRepository.findById(id)
                        .orElseThrow(() -> new MovieNotFoundException(id));
        movie.setImage(movieDto.getImage());
        movie.setPlot(movieDto.getPlot());
        movie.setRating(movieDto.getRating());
        movie.setName(movieDto.getName());
        movie.setCategories(categories);
        return Optional.of(this.movieRepository.save(movie));
    }

    @Override
    public void deleteById(Long id) {
        Movie movie = this.movieRepository.findById(id)
                .orElseThrow(() -> new MovieNotFoundException(id));
        this.movieRepository.delete(movie);
    }

    @Override
    public void addToFavorites(Long movieId, String username) {
        Movie movie = this.movieRepository.findById(movieId)
                .orElseThrow(() -> new MovieNotFoundException(movieId));
        User user = this.userRepository.findByUsername(username);
        user.getFavoriteMovies().add(movie);
        this.userRepository.save(user);
    }

    @Override
    public List<Movie> getFavorites(String username) {
        User user = this.userRepository.findByUsername(username);

        return user.getFavoriteMovies();
    }

    @Override
    public void removeMovieFromFavorites(Long movieId, String username) {
        User user = this.userRepository.findByUsername(username);

        user.getFavoriteMovies().removeIf(movie -> movie.getId().equals(movieId));
        userRepository.save(user);
    }
}
