package com.skilldistillery.marketplace.converters

import com.skilldistillery.marketplace.enums.Rarity
import javax.persistence.AttributeConverter
import javax.persistence.Converter

@Converter(autoApply = true)
class RarityConverter : AttributeConverter<Rarity, String> {

    override fun convertToDatabaseColumn(status: Rarity): String {
        return status.name.lowercase()
    }

    override fun convertToEntityAttribute(dbData: String): Rarity {
    return Rarity.valueOf(dbData.uppercase())
    }
}
