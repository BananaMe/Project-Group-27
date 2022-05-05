package mk.ukim.uiktp.projectgroup27backend.services.impl;

import mk.ukim.uiktp.projectgroup27backend.model.Category;
import mk.ukim.uiktp.projectgroup27backend.model.Movie;
import mk.ukim.uiktp.projectgroup27backend.model.dto.MovieDto;
import mk.ukim.uiktp.projectgroup27backend.model.exceptions.MovieNotFoundException;
import mk.ukim.uiktp.projectgroup27backend.repository.CategoryRepository;
import mk.ukim.uiktp.projectgroup27backend.repository.MovieRepository;
import mk.ukim.uiktp.projectgroup27backend.services.MovieService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;
    private final CategoryRepository categoryRepository;

    public MovieServiceImpl(MovieRepository movieRepository, CategoryRepository categoryRepository) {
        this.movieRepository = movieRepository;
        this.categoryRepository = categoryRepository;
    }


    @Override
    public List<Movie> findAll() {
        return this.movieRepository.findAll();
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
}
