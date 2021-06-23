const { Model, DataTypes } = require('sequelize');

class Director extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
    }, { sequelize, timestamps: false });
  }
}

module.exports = Director;
