const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelizer goes hereeeeee'); // Whats my Sequlize path?
const BookClubModel = require('./Clubs');

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {   ///this needs work
        type: DataTypes.STRING,
        allowNull: false,
      },
      bookclub_id: {
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
    modelName: 'user',

  }
);

module.exports = UserModel;
