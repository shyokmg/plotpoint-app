
// Import models 
const sequelize = require('../config/connection');
const { Club, Book, ClubBook, Review, UserBook, User } = require('../models');

// Function to create a club
const createClub = async () => {
  const club = await Club.create({ 
    club_name: 'Old Margarets Gals' });
    return club.id; // store club and return Id to use in seeding
};

// Function to create a book - 
const createBook = async () => {
  const book = await Book.create({ 
    book_name: 'Then There Were None', 
    author: 'Agatha Christie', 
    description: 'Some people get murdered', 
    genre: 'Detective' 
  });
  return book.id;
};

// Function to create a user
const createUser = async (clubId) => {
  const user = await User.create({
    first_name: 'Margaret',
    last_name: 'Bucket',
    user_name: 'OldMarge',
    email: 'marge@aol.com',
    password: 'Potatosoup',
    bookclub_id: clubId,
  });
  return user.id;
};

// Function to create a review
const createReview = async (bookId) => {
  await Review.create({ 
    review_text: 'Another classic here girls', 
    book_rating: 5, 
    book_id: bookId 
  });
};

// Function to create clubbooks
const createClubBook = async (clubId, bookId) => {
  await ClubBook.create({ book_id: bookId, club_id: clubId });
};

// Function to create userbooks
const createUserBook = async (userId, bookId) => {
  await UserBook.create({ book_id: bookId, user_id: userId });
};

// Function to populate the database
const seed = async () => {
  try {
  const clubId = await createClub();
  const bookId = await createBook();
  const userId = await createUser(clubId); // store user ID returned from createUser

  await createReview(bookId); // use stored data
  await createClubBook(clubId, bookId);
  await createUserBook(userId, bookId);

  console.log('Database seeded successfully');
} catch (error) {
  console.error('Error seeding database:', error);
}
};

module.exports = seed;
