package com.skilldistillery.marketplace.repositories

import com.skilldistillery.marketplace.entities.Collection
import org.springframework.data.jpa.repository.JpaRepository

interface CollectionRepository : JpaRepository<Collection?, Int?>
