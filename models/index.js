const User = require('./User');
const Book = require('./Book');
const Club = require('./Club');
const Review = require('./Review');
const UserBook = require('./UserBook');
const ClubBook = require('./ClubBook');


// Defined  associations 
User.belongsTo(Club, { foreignKey: 'club_id' });
Club.hasMany(User, { foreignKey: 'club_id'});
Book.belongsToMany(Club, { through: { model: ClubBook, unique: false}, as: 'clubs'} );
Club.belongsToMany(Book, { through: { model: ClubBook, unique: false}, as: 'books'} );
User.belongsToMany(Book, { through: { model: UserBook, unique: false}, as: 'books'} );
Book.belongsToMany(User, { through: { model: UserBook, unique: false}, as: 'users'} );
Review.belongsTo(Book, { foreignKey: 'book_id' });
Review.belongsTo(User, { foreignKey: 'user_id'});
Book.hasMany(Review, { foreignKey: 'review_id'});


// Exporting the initialized Sequelize instance / s yeeaaaah make sure order is correct
module.exports = {
  User,
  Book,
  Club,
  UserBook,
  ClubBook,
  Review,
};
