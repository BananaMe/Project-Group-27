package mk.ukim.uiktp.projectgroup27backend.model.dto;

import lombok.Data;
import mk.ukim.uiktp.projectgroup27backend.model.Category;

import javax.persistence.ManyToMany;
import java.util.List;

@Data
public class MovieDto {

    private String name;
    private Double rating;
    private String plot;
    private String image;
    private List<Long> categoriesIds;

    public MovieDto(String name, Double rating, String plot, List<Long> categoriesIds, String image) {
        this.name = name;
        this.rating = rating;
        this.plot = plot;
        this.categoriesIds = categoriesIds;
        this.image = image;
    }
}
