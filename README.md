# FinalProject (VioletMarketplace)

## Topics
  - Description
  <!-- - How to Run -->
  - Technologies
  - Concepts
  - Challenges and Lessons We Learned
  - Rest Endpoints
  - UML Diagram


## Description
    - This was our group final project for Skill Distillery, a full-stack Java Bootcamp. The concept was an NFT marketplace that allows user's to bid on/purchase tokens. Skill Distillery generated our team names using a My Little Pony name generator, so we rolled with the idea and made our first NFT Collection My Little Pony based.
    - Users visiting our site have the ability to create an account, with authorization and encryption from Spring Security. User's can view their token collection and bid on/purchase tokens posted by other users. CRUD has been implemented for Users, Tokens, Bids and Transactions.  
<!--  Move to LESSONS LEARNED
    - VioletMarketplace is a full-stack Java(Spring Boot)/Angular project that allows users to create and trade NFTs. Going into this (Nov '21), I didn't know what NFTs were. Throughout the course of this project I learned a ton about NFTs and Web3 technology in general. -->
    <!-- Need more details about how a user can interact with the website  -->

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
<!-- OOP, MVC Pattern, Web Forms, Proof of Work, DBMS, ORM, Encryption and Authorization, Configuring REST Endpoints, Integrating Angular frontend, CRUD, dependency management, Test Driven Development, -->
  - Object Oriented Programming
  - Model View Controller pattern
  - Object Realational Mapping
  - Relational Database Management Systems
  - Configuring REST Endpoints
  - Web Forms
  - Test Driven Development
  - Integrating Angular into Java Project


<!-- ## Challenges and Lessons Learned  -->



## REST Endpoints

# Token


|   Request Method     | URI                               | Request Body                  | Response Body                          
|------------------- --|-----------------------------------|-------------------------------|---------------------------
| GET  (No Auth)       |`/api/tokens/user/username`        |                               | Tokens by Username                     
| GET  (No Auth)       |`/api/home/tokens`                 |                               | All Tokens                             
| GET                  |`/api/tokens/myTokens`             |                               | Principal's Token's                    
| GET                  |`/api/tokens/id/{id}`              |                               | Token's by ID                          
| POST                 |`/api/tokens`                      | JSON for new Token            | Create Token                           
| PUT                  |`/api/tokens/{tid}`                | JSON to update Token          | Update Token                           
| DELETE               |`/api/tokens/{tid}`                |                               | Delete Token                           















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



# Technologies

-   JSON
-   REST API
-   Bootstrap 5
-   Git
-   MySQL Workbench
-   Spring Web MVC Framework
-   Gradle
-   TypeScript
-   Angular
-   Postman
-   JUnit
-   MAMP
-   JPA
-   Github
-   CSS
-   SpringToolSuite 4
-   Java
-   AWS EC2
-   SQL
-   Persistence
-   Hibernate
-   HTML



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



## REST Endpoints Auth

Postman routes for Auth:

|   HTTP Verb Purpose |URI                                |Request Body                   |Response Body                           | Operation
|---------------------|-----------------------------------|-------------------------------|----------------------------------------|-----------
|POST                 |`register`                         |JSON for new user registration |Create registered user                  |Register
|GET                  |`authenticate`                     |                               |Authorize User name                     |Authorize



- [Back to Top](#final-project)



## REST Endpoints Cartoon

Postman routes for Cartoon:

|   HTTP Verb Purpose |URI                                |Request Body                   |Response Body                           | Operation
|---------------------|-----------------------------------|-------------------------------|----------------------------------------|-----------
|GET                  |`/api/cartoons`                    |                               |List of Cartoons                        |Read
|GET                  |`/api/cartoons/networks`           |                               |List of Networks                        |Read
|GET                  |`/api/cartoons/ratings`            |                               |List of Ratings                         |Read
|GET                  |`/api/users/{id}/cartoons`         |                               |List of User's Cartoons                 |Read
|GET                  |`/api/cartoons/{cid}`              |                               |View Cartoon by id                      |Read
|GET                  |`/api/cartoons/search/{keyword}`   |                               |List of Cartoons by keyword             |Read      
|GET                  |`/api/cartoons/favorites/{favs}`   |                               |List of Cartoons favorited by User      |Read
|POST                 |`/api/cartoons`                    |JSON for new Cartoon           |Create Cartoon                          |Create
|PUT                  |`/api/cartoons/{id}`               |JSON to update Cartoon         |Update Cartoon                          |Update
|DELETE               |`/api/cartoons/{cid}`              |                               |Delete review                           |Delete
|DELETE               |`/api/comments/{id}`               |                               |Delete comment                          |Delete




- [Back to Top](#final-project)



## REST Endpoints Comment

Postman routes for Comment:  

|   HTTP Verb Purpose |URI                                      |Request Body                    |Response Body                           | Operation
|---------------------|-----------------------------------------|-------------------------------|----------------------------------------|-----------
|GET                  |`api/cartoons/{cid}/comments`            |                               |List of Cartoon Comments                |Read
|GET                  |`/api/cartoons/{cid}/comments/{id}`      |                               |View Cartoon Comment by ID              |Read
|POST                 |`/api/cartoons/{cid}/comments`           |JSON for new Cartoon Comment   |create Comment for Cartoon              |Create
|POST                 |`/api/cartoons/{cid}/comments{commentId}`|JSON for new Reply Comment     |Create Reply Comment                    |Create
|PUT                  |`/api/cartoons/{cid}/comments/{id}       |JSON for updating Comment      |Update Cartoon Comment                  |Update
|DELETE               |`/cartoons/{cid}/comments/{id}           |                               |Delete Cartoon Comment                  |Delete



- [Back to Top](#final-project)



## REST Endpoints Fact

Postman routes for Fact:  

|   HTTP Verb Purpose |URI                                      |Request Body                    |Response Body                           | Operation
|---------------------|-----------------------------------------|-------------------------------|----------------------------------------|-----------
|GET                  |`/api/{cid}/fact`                        |                               |List of Cartoon Facts                   |Read
|GET                  |`/api/{cid}/fact/{id}`                   |                               |View Cartoon Fact by ID                 |Read
|POST                 |`/api/{cid}/fact`                        |JSON for new Cartoon Fact      |create Fact for Cartoon                 |Create
|PUT                  |`/api/{cid}/fact/{id}`                   |JSON for updating Cartoon Fact |Update Cartoon Fact                     |Update
|DELETE               |`/cartoons/{cid}/comments/{id}           |                               |Delete Cartoon Comment                  |Delete



- [Back to Top](#final-project)



## REST Endpoints Media

Postman routes for Media:

|   HTTP Verb Purpose |URI                                |Request Body                   |Response Body                           | Operation
|---------------------|-----------------------------------|-------------------------------|----------------------------------------|-----------
|GET                  |`/api/media`                       |                               |List of Media                           |Read
|GET                  |`/api/cartoons/{cid}/media`        |                               |View Cartoon Media by ID                |Read
|GET                  |`/api/media/{id}`                  |                               |View Media by ID                        |Read
|POST                 |`/api/{cid}/media`                 |JSON for new Media             |Create Cartoon Media                    |Create
|PUT                  |`/api/media/{id}`                  |JSON for updating Media        |Update Media                            |Update
|DELETE               |`/api/media/{id}`                  |                               |Delete Media                            |Delete      
|GET                  |`/api/users/{id}/media`            |                               |List of Media by User                   |Read



- [Back to Top](#final-project)



## REST Endpoints Merchandise

Postman routes for Merchandise:  

|   HTTP Verb Purpose |URI                                |Request Body                   |Response Body                           | Operation
|---------------------|-----------------------------------|-------------------------------|----------------------------------------|-----------
|GET                  |`/api/merch`                       |                               |List of Merchandise                     |Read
|GET                  |`/api/cartoons/{cid}/merch`        |                               |List of Merchandise by Cartoon          |Read
|GET                  |`/api/users/{id}/merch`            |                               |List of Merchandise by User             |Read
|GET                  |`/api/{cid}/merch/{id}`            |                               |View Merchandise by ID                  |Read
|POST                 |`/api/{cid}/merch`                 |JSON for new Merchandise       |Create Merchandise                      |Create
|PATCH                |`/api/{cid}/merch/{id}`            |JSON for updating Merchandise  |Update Merchandise                      |Update      
|DELETE               |`/api/merch/{id}`                  |                               |Delete Merchandise                      |Delete



- [Back to Top](#final-project)



## REST Endpoints Trivia

Postman routes for Trivia:  

|   HTTP Verb Purpose |URI                                |Request Body                   |Response Body                           | Operation
|---------------------|-----------------------------------|-------------------------------|----------------------------------------|-----------
|GET                  |`/api/trivia`                      |                               |List of Trvia                           |Read
|GET                  |`/api/trivia/{id}`                 |                               |View Trivia by ID                       |Read
|POST                 |`/api/trivia`                      |JSON for new Trivia            |Create new Trivia                       |Create
|PUT                  |`/api/trivia/{id}`                 |JSON for updating Trivia       |Update Trivia                           |Update  
|DELETE               |`/api/trivia/{id}`                 |                               |Delete Trivia                           |Delete



- [Back to Top](#final-project)



## REST Endpoints User

Postman routes for User:   

|   HTTP Verb Purpose |URI                                |Request Body                   |Response Body                           | Operation
|---------------------|-----------------------------------|-------------------------------|----------------------------------------|-----------
|GET                  |`/api/users`                       |                               |List of Users                           |Read
|GET                  |`/api/users/{id}/comments`         |                               |List of User Comments                   |Read
|GET                  |`/api/users/profile`               |                               |View Registered User                    |Read
|POST                 |`/api/users`                       |JSON for new User              |Create User                             |Create
|PUT                  |`/api/users/{id}`                  |JSON for updating User         |Update User                             |Update
|DELETE               |`/api/users/{id}`                  |                               |Delete User                             |Delete



- [Back to Top](#final-project)



## Lessons Learned
Ryan: This project was my first role as DBA; it was a intimidating to take on a previously untried role, but around the middle of our time on this project, I felt I had a full grasp on MYSQLWorkbench, forward engineering, and schema uploading. I was also able to gain experience working with the proper API routing through frontend and backend and the myriad of problems that can occur with this process.



- [Back to Top](#final-project) -->
