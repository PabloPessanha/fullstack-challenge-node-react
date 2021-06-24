const { Model, DataTypes } = require('sequelize');

class Teacher extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
    }, { sequelize, timestamps: false });
  }
}

module.exports = Teacher;
