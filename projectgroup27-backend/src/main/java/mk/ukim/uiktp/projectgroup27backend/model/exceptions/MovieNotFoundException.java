package mk.ukim.uiktp.projectgroup27backend.model.exceptions;

public class MovieNotFoundException extends RuntimeException{
    public MovieNotFoundException(Long id) {
        super(String.format("Movie with id %s was not found", id));
    }
}
