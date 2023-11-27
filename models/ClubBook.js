const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class ClubBook extends Model {}

ClubBook.init(
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
    modelName: 'club_book',
  }
);

module.exports = ClubBook;
