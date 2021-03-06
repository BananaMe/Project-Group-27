package mk.ukim.uiktp.projectgroup27backend.restControllers;


import mk.ukim.uiktp.projectgroup27backend.model.Movie;
import mk.ukim.uiktp.projectgroup27backend.model.dto.MovieDto;
import mk.ukim.uiktp.projectgroup27backend.services.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/movies")
public class MoviesRestController {

    private final MovieService movieService;

    public MoviesRestController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getAllMovies(@RequestParam(required = false) List<Long> categoryIds){
        if(categoryIds != null){
            return movieService.findByCategories(categoryIds);
        }
        return movieService.findAll();
    }

    @PostMapping
    public ResponseEntity<Movie> addMovie(@RequestBody MovieDto movieDto){
        return this.movieService.save(movieDto)
                .map(movie -> ResponseEntity.ok().body(movie))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/{movieId}")
    public ResponseEntity<Movie> editMovie(@PathVariable Long movieId, @RequestBody MovieDto movieDto){
        return this.movieService.edit(movieId, movieDto)
                .map(movie -> ResponseEntity.ok().body(movie))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/{movieId}")
    public ResponseEntity<Movie> getMovie(@PathVariable Long movieId){
        return this.movieService.findById(movieId)
                .map(movie -> ResponseEntity.ok().body(movie))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/{movieId}")
    public ResponseEntity deleteMovie(@PathVariable Long movieId){
        this.movieService.deleteById(movieId);
        if(!this.movieService.findById(movieId).isPresent())
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/{movieId}")
    public ResponseEntity<Void> addToFavorites(@PathVariable Long movieId, @RequestParam String user) {
        this.movieService.addToFavorites(movieId, user);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/favorites")
    public ResponseEntity<List<Movie>> getFavorites(@RequestParam String username) {

        return ResponseEntity.ok(this.movieService.getFavorites(username));
    }

    @DeleteMapping("/favorites/{movieId}")
    public ResponseEntity<Void> deleteMovieFromFavorites(@PathVariable Long movieId, @RequestParam String username) {

        this.movieService.removeMovieFromFavorites(movieId, username);
        return ResponseEntity.noContent().build();
    }
}
