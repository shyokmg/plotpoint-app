# Book Club Manager

## Description

Book Club Manager is a web application designed to help you organize and manage your book clubs! This app simplifies the process of organzing books, reviews, member and more.

## Live Application

You can check out the live application here: [Live Demo at Heroku](https://plotpoint-app-1133a1029544.herokuapp.com/login)

## Table of Contents

- [Features](#features)
- [Getting_Started](#getting_started)
- [Usage](#usage)
- [Example](#example)
- [License](#license)

## Features

- **Book Library**: Browse and search for books to add to your club's reading list. Retrieve book details, covers, and author information from external sources.
- **Member Management**: Manage members of your book club and keep a list of participants.
- **Reviews**: Create reviews for each book to compare notes.

## Getting_Started

1. **Installation**: Clone this repository and install the necessary dependencies.

   ```bash
   git clone https://github.com/shyokmg/plotpoint-app.git
   cd plotpoint
   npm install
   ```

2. **Configuration**: Set up enviro variables and configure the db connection.

    edit the '.env' file with your local variables and confi the database connection URL

3. **Database Migration**: Create tables by running migrations.

    ```bash
   npm run migrate
   ```
4. **Start Application and Access**: 

    ```bash
    npm start
    http://localhost:3001
    ```

## Usage

    - Create new book clubs
    - Create users and join clubs
    - add books for the club to read
    - add reviews for said books and compare

## Example
![Screenshot](images/Screenshot%20Deployment.jpg)

## License
This project is licensed under the MIT License.

## Questions
If you have any questions about this repo, then please open an issue or contact me on GitHub at [shyokmg](https://github.com/shyokmg/plotpoint-app) 
