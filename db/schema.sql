DROP DATABASE IF EXISTS plotpoint_db;
CREATE DATABASE plotpoint_db;

-- -- USERS TABLE
-- CREATE TABLE IF NOT EXISTS Users (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   user_name VARCHAR(30) UNIQUE NOT NULL,
--   email VARCHAR(255) UNIQUE NOT NULL,
--   password VARCHAR(30) NOT NULL,
--   bookclub_id INT,
--   FOREIGN KEY (bookclub_id) REFERENCES club (id)
-- );

-- -- BOOKS TABLE
-- CREATE TABLE IF NOT EXISTS Books (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   book_name VARCHAR(255) NOT NULL,
--   author VARCHAR(255) NOT NULL,
--   description TEXT,
--   genre VARCHAR(255) NOT NULL
-- );

-- -- CLUBS TABLE
-- CREATE TABLE IF NOT EXISTS Clubs (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   club_name VARCHAR(255) NOT NULL,
--   UNIQUE (club_name)
-- );

-- -- CLUBBOOKS TABLE
-- CREATE TABLE IF NOT EXISTS ClubBooks (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   book_id INT,
--   club_id INT,
--   FOREIGN KEY (book_id) REFERENCES book (id),
--   FOREIGN KEY (club_id) REFERENCES club (id)
-- );

-- -- REVIEWS TABLE
-- CREATE TABLE IF NOT EXISTS Reviews (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   review_text TEXT,
--   book_rating INT,
--   CHECK (book_rating BETWEEN 1 AND 5) 
-- );

-- -- USERBOOKS TABLE
-- CREATE TABLE IF NOT EXISTS UserBooks (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   book_id INT,
--   user_id INT,
--   FOREIGN KEY (book_id) REFERENCES book (id),
--   FOREIGN KEY (user_id) REFERENCES user (id)
-- );
