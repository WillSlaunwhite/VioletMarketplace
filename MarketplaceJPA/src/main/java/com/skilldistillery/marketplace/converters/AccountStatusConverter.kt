package com.skilldistillery.marketplace.converters

import com.skilldistillery.marketplace.enums.AccountStatus
import javax.persistence.AttributeConverter
import javax.persistence.Converter

@Converter(autoApply = true)
class AccountStatusConverter : AttributeConverter<AccountStatus, String> {

    override fun convertToDatabaseColumn(status: AccountStatus): String {
        return status.name.lowercase()
    }

    override fun convertToEntityAttribute(dbData: String): AccountStatus {
        return AccountStatus.valueOf(dbData.uppercase())
    }
}
