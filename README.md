# FinalProject (VioletMarketplace)

### Topics

1. [How to Install](#installation)
2. [Technologies](#technologies)
3. [Project Description](#description)
4. [Challenges and Lessons Learned](#challenges)
5. [API Endpoints](#endpoints)
6. [Team](#team)
7. [Concepts Used](#concepts)
8. [Contact Information](#contact)
9. [License](#license)
10. [Project Status](#status)

##### www.violetmarketplace.com

## Installation Instructions <a name="installation"></a>

1. Clone the repository:

```bash
git clone https://github.com/WillSlaunwhite/VioletMarketplace.git
```

2. Navigate to the project directory and install the required npm packages:

```bash
  cd VioletMarketplace/ngVioletMarketplace
  npm install
```

3. Start the Angular application:

```bash
  ng serve
```

4. In another terminal, navigate to the backend directory and run the Spring Boot application:

```bash
  cd VioletMarketplace/VioletMarketplace
  ./gradlew bootRun
```

_Please note that you must have Gradle and npm installed on your system to run these commands._

## Technologies Used <a name="technologies"></a>

**This project uses a variety of technologies and libraries:**

-   **Java 8 (Spring Boot):** The backend of our application is built using Spring Boot, taking advantage of its easy configuration to set up and run our server.
-   **Kotlin:** Used alongside Java for backend development.
-   **JavaScript/TypeScript:** The basis for our frontend development, TypeScript brings static types to JavaScript, enhancing tooling and scaling our project.
-   **Angular:** The main framework used for building our frontend. It provides a robust platform for building scalable and maintainable applications.
-   **NgRx:** Used for managing the state of our Angular application. It brings the Redux pattern to Angular, offering a single, immutable data state.
-   **RxJS:** A library for reactive programming, used for handling asynchronous operations and establishing an observer pattern within our application.
-   **HTML/CSS/SCSS/Angular Material:** Used for creating and styling the user interface of our application. Angular Material offers pre-built UI components that follow Material Design principles.
-   **MySQL:** Our primary relational database management system, used for storing application data.
-   **Spring Data JPA:** Simplifies the creation of Data Access Objects by using Spring and JPA. We use it for database interaction.
-   **Spring Security (JWT):** A security framework that provides authentication and authorization in our application. We have configured it to use JSON Web Tokens.
-   **Gradle:** Used for automating the building, testing, publishing, and more of our software packages or other types of projects.
-   **Postman:** Used for testing our application's API endpoints.
-   **AWS EC2:** Where our application is deployed for a live demo.

## Description <a name="description"></a>

VioletMarketplace is a decentralized platform for trading and interacting with NFTs (Non-Fungible Tokens). It's designed to empower users by facilitating the creation and trading of unique digital assets. This project originated as a group final project for Skill Distillery, a full-stack Java bootcamp. During a 9-day Agile sprint, our team dealt with numerous challenges, each contributing to the successful delivery of a comprehensive NFT marketplace.

After the bootcamp, VioletMarketplace underwent significant expansion and enhancements. Among other key functionalities, I introduced a site currency for purchasing Tokens, search functionality, database improvements, and a transition to state management using NgRx. The project went from being one monolithic module to a set of a dozen independent modules, a restructuring that eased maintenance and scaled complexity. Alongside these changes, I completely redesigned the frontend, with each component carefully crafted to enhance user experience.

## Challenges and Lessons Learned <a name="challenges"></a>

Developing VioletMarketplace was an incredible experience that required resilience, teamwork, and pushed us to deepen our knowledge in software engineering. Here are some key takeaways from this project:

1. **Sprint Under Tight Deadlines:** During the short sprint, our team had to adapt quickly to overcome the numerous challenges we faced under such tight deadlines. We had to make tough decisions about features we wanted to implement and how we wanted to project to grow to reach an MVP.

2. **Overcoming Deployment Issues:** We faced significant deployment challenges due to a third-party UI library. To resolve this, I rebuilt the frontend from scratch and deployed it on a new server. This experience taught me a ton about managing dependencies and the dangers that come with it!

3. **Setting Up an Amazon EC2 Instance and SSL Certificate:** As part of overcoming our deployment issues, I configured an Amazon EC2 instance, set up a MySQL database, a Tomcat web server, and added an SSL certificate. This really helped me gain a foundation in networking and DevOps, and insights into web security.

4. **Introducing Key Features and Technologies Post-bootcamp:** The enhancements introduced to VioletMarketplace post-bootcamp included a shift to JWT authentication, introduction of state management via NgRx, and significant database improvements. Additionally, the project's shift from using POJOs to observables was a fundamental change that improved the application's responsiveness.

5. **Module Refactoring and Frontend Redesign:** Refactoring the project from a monolithic module to a dozen separate modules resulted in a dramatic decrease in the project's complexity and eased its maintenance. The frontend redesign was a comprehensive effort, resulting in meticulously crafted components that greatly improved the user interface.

6. **Database Expansion:** Adding seven new tables to the database expanded it by over 50%. These additions transformed the database's structure and enabled key functionalities. The impact of these changes on the implementation of every feature highlighted the importance of careful system design and the influence of effective database normalization.

## Team

-   Will Slaunwhite
-   Caleb Gardner
-   Dave Roberts
-   Brandon Pope

## Concepts <a name="concepts"></a>

-   Object Oriented Programming
-   Model View Controller pattern
-   Object Realational Mapping
-   Relational Database Management Systems
-   Configuring REST Endpoints
-   Web Forms
-   Test Driven Development
-   Integrating Angular into Java Project

## REST Endpoints <a name="endpoints"></a>

| HTTP Method | Route                            | Description                             | Requires Authentication |
| ----------- | -------------------------------- | --------------------------------------- | ----------------------- |
| GET         | /user/{username}                 | Fetch a user by username                | No                      |
| GET         | /user/id/{userId}                | Fetch a user by user ID                 | No                      |
| POST        | /user                            | Create a new user                       | No                      |
| PUT         | /user/{userId}                   | Update a user                           | Yes                     |
| DELETE      | /user/{userId}                   | Delete a user                           | Yes                     |
| POST        | /credit                          | Add site currency to account            | Yes                     |
| POST        | /debit                           | Deduct currency from account            | Yes                     |
| GET         | /{userId}/balance/{currencyType} | Fetch a user's balance by currency type | Yes                     |
| GET         | /{userId}/balance                | Fetch all of a user's balances          | Yes                     |
| GET         | /transfers/seller/{userId}       | Fetch all sales made by a user          | Yes                     |
| GET         | /transfers/buyer/{userId}        | Fetch all purchases made by a user      | Yes                     |
| GET         | /transfers/{userId}              | Fetch all transactions made by a user   | Yes                     |
| POST        | /transfers                       | Create a new transaction                | Yes                     |
| GET         | /home/tokens                     | Fetch all tokens                        | No                      |
| GET         | /tokens/user/{username}          | Fetch a non-principal user's tokens     | No                      |
| GET         | /tokens/id/{tid}                 | Fetch a specific token by ID            | No                      |
| GET         | /tokens/myTokens                 | Fetch a principal's tokens              | Yes                     |
| POST        | /tokens                          | Create a new token                      | Yes                     |
| PUT         | /tokens/buy/{tid}                | Buy a token                             | Yes                     |
| PUT         | /tokens/{tid}                    | Update a token                          | Yes                     |
| DELETE      | /tokens/{tid}                    | Delete a token                          | Yes                     |
| DELETE      | /tokens/{tid}                    | Delete a token (Search Controller)      | Yes                     |
| GET         | /bids/{tokenId}                  | Fetch all bids for a token              | No                      |
| GET         | /bids/{userId}                   | Fetch all bids made by a user           | No                      |
| POST        | /bids                            | Place a new bid                         | Yes                     |
| DELETE      | /bids/delete/{bidId}             | Delete a bid                            | Yes                     |
| POST        | /register                        | Register a new user                     | No                      |
| POST        | /authenticate                    | Authenticate a user                     | No                      |

## Contact Information <a name="contact"></a>

Feel free to reach out to me on LinkedIn or via email!

[LinkedIn](https://linkedin.com/in/willslaunwhite)
williamslaunwhite@gmail.com

## License <a name="license"></a>

MIT License

Copyright (c) 2023 Will Slaunwhite

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Project Status

In Development
