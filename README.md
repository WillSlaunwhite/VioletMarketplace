# FinalProject (VioletMarketplace)

## Topics
  - Description
  - Technologies
  - Concepts
  - Challenges and Lessons We Learned
  - Rest Endpoints
  <!-- - How to Run -->

## Description

This was our group final project for Skill Distillery, a full-stack Java Bootcamp. The concept was
an NFT marketplace that allows user's to bid on/purchase tokens. Skill Distillery generated our
team names using a My Little Pony name generator, so we rolled with the idea and made our first
NFT Collection My Little Pony based.

Users visiting our site have the ability to create an account, with authorization and encryption
from Spring Security. User's can view their token collection and bid on/purchase tokens posted by
other users. CRUD has been implemented for Users, Tokens, Bids and Transactions.  
<!--  Move to LESSONS LEARNED
    - VioletMarketplace is a full-stack Java(Spring Boot)/Angular project that allows users to create and trade NFTs. Going into this (Nov '21), I didn't know what NFTs were. Throughout the course of this project I learned a ton about NFTs and Web3 technology in general.
     Need more details about how a user can interact with the website  -->

## Team

  - Will Slaunwhite
  - Caleb Gardner
  - Dave Roberts
  - Brandon Pope

## Technologies Used

  - Java 8 (Spring Boot)
  - Javascript/TypeScript
  - Angular
  - HTML/CSS/SCSS/Angular Material
  - MySQL
  - JPA2
  - Gradle
  - Postman
  - AWS EC2

## Concepts

  - Object Oriented Programming
  - Model View Controller pattern
  - Object Realational Mapping
  - Relational Database Management Systems
  - Configuring REST Endpoints
  - Web Forms
  - Test Driven Development
  - Integrating Angular into Java Project
<!-- OOP, MVC Pattern, Web Forms, Proof of Work, DBMS, ORM, Encryption and Authorization, Configuring REST Endpoints, Integrating Angular frontend, CRUD, dependency management, Test Driven Development, -->

<!-- ## Challenges and Lessons Learned  -->


## REST Endpoints

### Token


| Request Method | URI                         | Request Body         | Response Body       |
|----------------|-----------------------------|----------------------|---------------------|
| GET  (No Auth) | `/api/tokens/user/username` |                      | Tokens by Username  |
| GET  (No Auth) | `/api/home/tokens`          |                      | All Tokens          |
| GET            | `/api/tokens/myTokens`      |                      | Principal's Token's |
| GET            | `/api/tokens/id/{id}`       |                      | Token's by ID       |
| POST           | `/api/tokens`               | JSON for new Token   | Create Token        |
| PUT            | `/api/tokens/{tid}`         | JSON to update Token | Update Token        |
| DELETE         | `/api/tokens/{tid}`         |                      | Delete Token        |

<!--
# Final Project

- [Toon Throwback](#final-project)
  - [Description](#description)
  - [Technologies](#technologies)
  - [Concepts](#concepts)
  - [Auth Rest Endpoints](#rest-endpoints-auth)
  - [Cartoon Rest Endpoints](#rest-endpoints-cartoon)
  - [Comment Rest Endpoints](#rest-endpoints-comment)
  - [Fact Rest Endpoints](#rest-endpoints-fact)
  - [Media Rest Endpoints](#rest-endpoints-media)
  - [Merchandise Rest Endpoints](#rest-endpoints-merchandise)
  - [Trivia Rest Endpoints](#rest-endpoints-trivia)
  - [User Rest Endpoints](#rest-endpoints-user)
  - [Lessons Learned](#lessons-learned)



## EC2 URL

http://18.144.181.105:8080/ToonThrowback/#/home



## Description

This is a full stack group project that implements full CRUD for a user and their respective media and merchandise uploads to the site as well as a search bar to look up nostalgia inducing cartoons of the 90s/early 00s by keyword.



- [Back to Top](#final-project)



- [Back to Top](#final-project)



# Concepts

-   Try/Catch Statements and Exceptions
-   Request Mapping (Get, Post, Delete, Put)
-   Object Oriented Programming (Abstraction, Polymorphism, Inheritance, Encapsulation)
-   Interfaces
-   Web Forms
-   Services
-   Controllers
-   Entities
-   Database extraction with Repository
-   Encryption and Authorization



- [Back to Top](#final-project)

