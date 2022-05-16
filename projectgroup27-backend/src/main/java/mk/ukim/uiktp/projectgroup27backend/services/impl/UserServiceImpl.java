package mk.ukim.uiktp.projectgroup27backend.services.impl;

import lombok.AllArgsConstructor;
import mk.ukim.uiktp.projectgroup27backend.model.User;
import mk.ukim.uiktp.projectgroup27backend.model.dto.UserDto;
import mk.ukim.uiktp.projectgroup27backend.repository.UserRepository;
import mk.ukim.uiktp.projectgroup27backend.services.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {

    BCryptPasswordEncoder bCryptPasswordEncoder;
    UserRepository userRepository;

    @Transactional(rollbackFor = Exception.class)
    public void registerUser(UserDto userDto) {
        userDto.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));
        userRepository.save(new User(userDto));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return userRepository.findByUsername(username);
    }
}
