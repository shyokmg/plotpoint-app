
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelizer goes hereeeeee'); // Whats my Sequlize path?
const BookModel = require('./Book'); 
const UserModel = require('./User'); 

class UserBooksModel extends Model {}

UserBooksModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'book',
            key: 'id',
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
      }
  },
  {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userbook',
  }
);

module.exports = UserBooksModel;
