package com.skilldistillery.marketplace

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder

@SpringBootApplication
@EntityScan("com.skilldistillery.marketplace.entities")
@EnableJpaRepositories("com.skilldistillery.marketplace.repositories")
class VioletMarketplaceApplication : SpringBootServletInitializer() {
    override fun configure(application: SpringApplicationBuilder): SpringApplicationBuilder {
        return application.sources(VioletMarketplaceApplication::class.java)
    }

    @Bean
    fun configurePasswordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(VioletMarketplaceApplication::class.java, *args)
        }
    }
}
