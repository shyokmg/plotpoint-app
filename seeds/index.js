const seedBooks = require('./book-seeds');
const seedClubs = require('./club-seeds');
const seedReview = require('./review-seeds');
const seedUser = require('./user-seeds');
const seedClubBooks = require('./club-book-seeds');
const seedUserBooks = require('./user-book-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBooks();
  console.log('\n----- BOOKS SEEDED -----\n');

  await seedClubs();
  console.log('\n----- CLUBS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedReview();
  console.log('\n----- REVIEWS SEEDED -----\n');

  await seedClubBooks();
  console.log('\n----- CLUB BOOKS SEEDED -----\n');

  await seedUserBooks();
  console.log('\n----- USER BOOKS SEEDED -----\n');

  process.exit(0);
};

seedAll();
