// Import models 
const { Club, Book, ClubBook, Review, UserBook, User } = require('../models');

// Function to create a club
const createClub = async () => {
  await Club.create({ club_name: 'Old Margarets Gals' });
};

// Function to create a book
const createBook = async () => {
  await Book.create({ book_name: 'Then There Were None', author: 'Agatha Christie', description: 'Some people get murdered', genre: 'Detective' });
};

// Function to create a user
const createUser = async () => {
  await User.create({
    first_name: 'Margaret',
    last_name: 'Bucket',
    user_name: 'OldMarge',
    email: 'marge@aol.com',
    password: 'Potatosoup',
    bookclub_id: 1,
  });
};

// Function to create a review
const createReview = async () => {
  await Review.create({ review_text: 'Another classic here girls', book_rating: 5, book_id: 1 });
};

// Function to create clubbooks
const createClubBook = async () => {
  await ClubBook.create({ book_id: 1, club_id: 1 });
};

// Function to create userbooks
const createUserBook = async () => {
  await UserBook.create({ book_id: 1, user_id: 1 });
};

// Function to populate the database
const seed = async () => {
  await createClub();
  await createBook();
  await createUser();
  await createReview();
  await createClubBook();
  await createUserBook();
};

module.exports = seed;
