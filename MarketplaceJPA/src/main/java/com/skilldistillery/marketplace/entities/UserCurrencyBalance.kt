package com.skilldistillery.marketplace.entities

import com.skilldistillery.marketplace.converters.CurrencyTypeConverter
import com.skilldistillery.marketplace.enums.CurrencyType
import java.math.BigDecimal
import javax.persistence.*

@Entity
data class UserCurrencyBalance(
    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User,

    @Convert(converter = CurrencyTypeConverter::class)
    @Column(name = "currency_type")
    val currencyType: CurrencyType? = null,

    @Column(precision = 10, scale = 2)
    val balance: BigDecimal
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as UserCurrencyBalance

        return !(user != other.user || currencyType != other.currencyType)
    }

    override fun hashCode(): Int {
        var result = user.hashCode()
        result = 31 * result + (currencyType?.hashCode() ?: 0)
        return result
    }

    @Override
    override fun toString(): String {
        return this::class.simpleName + "(user = $user , currencyType = $currencyType , balance = $balance )"
    }
}
