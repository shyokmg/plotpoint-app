const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelizer goes hereeeeee'); // Whats my Sequlize path?

class ReviewModel extends Model {}

//add reference for who made the review//

ReviewModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review_text: {
      type: DataTypes.TEXT,
    },
    book_rating: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
            args: [1, 5],
            msg: 'Please Rate Book from 1 to 5 Stars',
        }
    }}
},
  {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    modelName: 'review',
  }
);

module.exports = ReviewModel;

