package mk.ukim.uiktp.projectgroup27backend.repository;

import mk.ukim.uiktp.projectgroup27backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
