const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelizer goes hereeeeee'); // Whats my Sequlize path?

class ClubsModel extends Model {}

ClubsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

  },
  {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    modelName: 'club',
  }
);

module.exports = ClubsModel;
