const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); // Whats my Sequlize path?

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // club_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //       model: 'club',
    //       key: 'id',
    //   }
    // }
  },
  {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;
