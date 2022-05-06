package mk.ukim.uiktp.projectgroup27backend.model.dto;

import lombok.Data;

@Data
public class CategoryDto {
    private String name;
    private String description;

    public CategoryDto(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
