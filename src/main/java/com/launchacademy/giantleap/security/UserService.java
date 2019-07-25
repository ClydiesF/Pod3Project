package com.launchacademy.giantleap.security;

import com.launchacademy.giantleap.models.Role;
import com.launchacademy.giantleap.models.User;
import com.launchacademy.giantleap.repositories.RoleRepository;
import com.launchacademy.giantleap.repositories.UserRepository;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private BCryptPasswordEncoder bCryptPasswordEncoder;

  public void save(User user) {
    user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    Set roles = new HashSet<Role>();
    if (user.getIsBarOwner()){
      roles.add(roleRepository.findByName("barOwner"));
    }else{
      roles.add(roleRepository.findByName("reviewer"));
    }
    user.setRoles(roles);

    userRepository.save(user);
  }

  public Optional<User> findById(Integer userId) {
    return userRepository.findById(userId);
  }

  public User findByUsername(String username) {
    return userRepository.findByUsername(username);
  }
}
