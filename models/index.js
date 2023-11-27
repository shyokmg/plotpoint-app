const sequelize = require('./sequelizer goes hereeeeee'); // REPLACE
const UserModel = require('./UserModel');
const BookModel = require('./BookModel');
const ClubsModel = require('./ClubsModel');
const UserBooksModel = require('./UserBooksModel');
const ClubBooksModel = require('./ClubBooksModel');
const ReviewModel = require('./ReviewModel');
const BookClubModel = require('./BookClubModel');

// Defined model associations 
UserModel.belongsTo(ClubsModel, { foreignKey: 'bookclub_id' });
ClubBooksModel.belongsTo(ClubsModel, { foreignKey: 'club_id' });
ClubBooksModel.belongsTo(BookModel, { foreignKey: 'book_id' });
UserBooksModel.belongsTo(BookModel, { foreignKey: 'book_id' });
UserBooksModel.belongsTo(UserModel, { foreignKey: 'user_id' });


// Exporting the initialized Sequelize instance / models yeeaaaah make sure order is correct
module.exports = {
  sequelize,
  UserModel,
  BookModel,
  ClubsModel,
  UserBooksModel,
  ClubBooksModel,
  ReviewModel,
  BookClubModel,
};
