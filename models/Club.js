const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); 

class Club extends Model {}

Club.init(
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

module.exports = Club;
