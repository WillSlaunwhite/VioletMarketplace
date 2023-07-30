package com.skilldistillery.marketplace.entities

import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDateTime
import javax.persistence.*

@Entity
class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id = 0

    @Column(name = "content")
    var content: String? = null

    @CreationTimestamp
    @Column(name = "created_on")
    var createdOn: LocalDateTime? = null

    @UpdateTimestamp
    @Column(name = "updated_on")
    var updatedOn: LocalDateTime? = null

    @ManyToOne
    @JoinColumn(name = "sender_id")
    var sender: User? = null

    @ManyToOne
    @JoinColumn(name = "recipient_id")
    var recipient: User? = null

    @OneToMany(mappedBy = "message")
    var replies: List<Message>? = null

    @ManyToOne
    @JoinColumn(name = "in_reply_to")
    var message: Message? = null
    override fun toString(): String {
        return "Message{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                ", sender=" + sender +
                ", recipient=" + recipient +
                ", replies=" + replies +
                ", message=" + message +
                '}'
    }
}
