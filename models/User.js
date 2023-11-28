const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
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
        validate: {
          len: [8],
        },
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
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    modelName: 'user',

  }
);

module.exports = User;
