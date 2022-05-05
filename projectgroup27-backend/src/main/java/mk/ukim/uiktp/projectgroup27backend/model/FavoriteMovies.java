package mk.ukim.uiktp.projectgroup27backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class FavoriteMovies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToMany
    private List<Movie> movies;

    public FavoriteMovies() {
    }

    public FavoriteMovies(User user) {
        this.user = user;
        this.movies = new ArrayList<>();
    }
}
