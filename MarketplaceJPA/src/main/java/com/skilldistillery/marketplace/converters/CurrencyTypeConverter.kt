package com.skilldistillery.marketplace.converters

import com.skilldistillery.marketplace.enums.CurrencyType
import com.skilldistillery.marketplace.enums.Rarity
import javax.persistence.AttributeConverter
import javax.persistence.Converter

@Converter(autoApply = true)
class CurrencyTypeConverter : AttributeConverter<CurrencyType, String> {

    override fun convertToDatabaseColumn(rarity: CurrencyType): String {
        return rarity.name.lowercase()
    }

    override fun convertToEntityAttribute(dbData: String): CurrencyType {
        return CurrencyType.valueOf(dbData.uppercase())
    }
}