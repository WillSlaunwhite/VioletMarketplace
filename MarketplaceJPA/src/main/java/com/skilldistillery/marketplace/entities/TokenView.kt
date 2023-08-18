package com.skilldistillery.marketplace.entities

import org.hibernate.annotations.CreationTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "token_view")
data class TokenView(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,

    @CreationTimestamp @Column(name = "view_date")
    var viewDate: LocalDateTime? = null,

    @ManyToOne @JoinColumn(name = "user_id")
    var user: User,

    @ManyToOne @JoinColumn(name = "token_id")
    var token: Token,

)
