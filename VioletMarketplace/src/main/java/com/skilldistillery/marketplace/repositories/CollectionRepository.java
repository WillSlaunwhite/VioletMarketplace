package com.skilldistillery.marketplace.repositories;

import com.skilldistillery.marketplace.entities.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollectionRepository extends JpaRepository<Collection, Integer> {

}
