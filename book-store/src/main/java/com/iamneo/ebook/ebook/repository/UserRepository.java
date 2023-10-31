package com.iamneo.ebook.ebook.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.iamneo.ebook.ebook.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUid(Long Uid);    
}
