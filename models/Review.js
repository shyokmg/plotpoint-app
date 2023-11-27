const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
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

module.exports = Review;

