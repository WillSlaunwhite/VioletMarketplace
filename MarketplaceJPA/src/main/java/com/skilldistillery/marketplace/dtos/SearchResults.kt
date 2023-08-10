package com.skilldistillery.marketplace.dtos

import com.fasterxml.jackson.annotation.JsonProperty
import com.skilldistillery.marketplace.entities.Token
import com.skilldistillery.marketplace.entities.User

data class SearchResults(
    @JsonProperty("users") val users: MutableSet<CommonUserDTO> = LinkedHashSet(),
    @JsonProperty("tokens") val tokens: MutableSet<CommonTokenDTO> = LinkedHashSet()
) {
}
