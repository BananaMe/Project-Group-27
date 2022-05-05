package mk.ukim.uiktp.projectgroup27backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Double rating;
    private String plot;
    private String image;

    @ManyToMany
    private List<Category> categories;

    public Movie() {
    }

    public Movie(String name, Double rating, String plot, List<Category> categories, String image) {
        this.name = name;
        this.rating = rating;
        this.plot = plot;
        this.categories = categories;
        this.image = image;
    }
}
