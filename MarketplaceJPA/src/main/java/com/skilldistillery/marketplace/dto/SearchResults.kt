package com.skilldistillery.marketplace.dto

import com.fasterxml.jackson.annotation.JsonProperty
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.entities.User

data class SearchResults(
    @JsonProperty("users") val users: Set<User> = LinkedHashSet(),
    @JsonProperty("tokens") val tokens: Set<Token> = LinkedHashSet()
) {
}
