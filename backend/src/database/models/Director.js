const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Director extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      passwordHash: Sequelize.STRING,
    }, { sequelize, timestamps: false });
  }
}

module.exports = Director;
