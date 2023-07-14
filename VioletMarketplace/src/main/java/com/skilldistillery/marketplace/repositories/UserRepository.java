package com.skilldistillery.marketplace.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.marketplace.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUsername(String username);

    @Query("SELECT u FROM User u WHERE LOWER(u.username) LIKE LOWER(CONCAT('%',:query,'%')) OR LOWER(u.displayName) LIKE LOWER(CONCAT('%',:query,'%'))")
    List<User> findByUsernameOrDisplayNameIgnoreCase(@Param("query") String query);

}
