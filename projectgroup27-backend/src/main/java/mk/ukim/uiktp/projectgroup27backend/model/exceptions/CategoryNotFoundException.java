package mk.ukim.uiktp.projectgroup27backend.model.exceptions;

public class CategoryNotFoundException extends RuntimeException{
    public CategoryNotFoundException(Long id) {
        super(String.format("Category with id %s was not found", id));
    }
}
