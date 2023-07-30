package com.skilldistillery.marketplace.entities

import com.skilldistillery.marketplace.converters.CurrencyTypeConverter
import com.skilldistillery.marketplace.enums.CurrencyType
import java.math.BigDecimal
import javax.persistence.*


@Embeddable
data class UserCurrencyBalanceKey(
    @Column(name = "user_id")
    val userId: Int,

    @Column(name = "currency_type")
    @Convert(converter = CurrencyTypeConverter::class)
    val currencyType: CurrencyType
)


@Entity
data class UserCurrencyBalance(
    @EmbeddedId
    val id: UserCurrencyBalanceKey,

    @Column(precision = 10, scale = 2)
    val balance: BigDecimal
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is UserCurrencyBalance) return false
        return id == other.id
    }

    override fun hashCode(): Int {
        return id.hashCode()
    }

    override fun toString(): String {
        return this::class.simpleName + "(userId = ${id.userId} , currencyType = ${id.currencyType} , balance = $balance )"
    }
}
