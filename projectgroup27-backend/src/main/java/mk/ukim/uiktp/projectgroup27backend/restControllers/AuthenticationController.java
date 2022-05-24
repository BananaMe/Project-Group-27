package mk.ukim.uiktp.projectgroup27backend.restControllers;

import lombok.AllArgsConstructor;
import mk.ukim.uiktp.projectgroup27backend.model.dto.UserDto;
import mk.ukim.uiktp.projectgroup27backend.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/authentication")
public class AuthenticationController {

    UserService userService;

    @PostMapping(value = "/register")
    public ResponseEntity<Void> register(@RequestBody UserDto user) {
        userService.registerUser(user);
        return ResponseEntity.noContent().build();
    }
}
