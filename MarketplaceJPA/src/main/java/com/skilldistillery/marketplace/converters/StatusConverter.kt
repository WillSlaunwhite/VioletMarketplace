package com.skilldistillery.marketplace.converters

import com.skilldistillery.marketplace.enums.Status
import javax.persistence.AttributeConverter
import javax.persistence.Converter

@Converter(autoApply = true)
class StatusConverter : AttributeConverter<Status, String> {

    override fun convertToDatabaseColumn(status: Status): String {
        return status.name.lowercase()
    }

    override fun convertToEntityAttribute(dbData: String): Status {
        return Status.valueOf(dbData.uppercase())
    }
}
