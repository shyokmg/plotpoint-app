const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelizer goes hereeeeee'); // Whats my Sequlize path?
const ClubsModel = require('./Clubs');
const BookModel = require('./Book');

class ClubBooksModel extends Model {}

ClubBooksModel.init(
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
      club_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'club',
            key: 'id',
        }
      }
  },
  {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'clubbook',
  }
);

module.exports = ClubBooksModel;
