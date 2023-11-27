// Import models
const { Clubs, Book, ClubBooks, Review, UserBooks, User } = require('./models');

// Function to populate the database
const seed = async () => {
    //create club      
    await Clubs.create({ club_name: 'Old Margarets Gals' });

    //create book
    await Book.create({ book_name: 'Then There Were None', author: 'Agatha Christie', description: 'Some people get murdered', genre: 'Detective' });
  
    //create user
    const hashedPassword = await hashPassword('user_password'); // Implement a secure password hashing function
    const user = await User.create({
        first_name: 'Margaret',
        last_name: 'Bucket',
        user_name: 'OldMarge',
        email: 'marge@aol.com',
        password: hashedPassword,
        bookclub_id: 1,
    });

    //create review
    await Review.create({ review_text: 'Another classic here girls', book_rating: 5 });

    //create clubbooks
    await ClubBooks.create({ book_id: 1, club_id: 1 });

    //create userbooks
    await UserBooks.create({ book_id: 1, user_id: 1 });
};

// Calling the seed function to populate the database
seed()
  .then(() => {
    console.log('Database seeded');
  })
  .catch((err) => {
    console.error('Error seeding database:', err);
  });
