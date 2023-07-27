package com.skilldistillery.marketplace.repositories;

import com.skilldistillery.marketplace.enums.AccountStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.marketplace.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByEnabled(boolean enabled);
	User findByUsername(String username);
    List<User> findByAccountStatus(AccountStatus accountStatus);

    @Query("SELECT u FROM User u WHERE LOWER(u.username) LIKE LOWER(CONCAT('%',:query,'%')) OR LOWER(u.displayName) LIKE LOWER(CONCAT('%',:query,'%'))")
    List<User> findByUsernameOrDisplayNameIgnoreCase(@Param("query") String query);

}
