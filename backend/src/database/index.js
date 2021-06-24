const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const allModels = require('./models');

const models = Object.values(allModels);

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.forEach((model) => {
      model.init(this.connection);
      if (model.associate) model.associate(this.connection.models);
    });
  }
}

module.exports = new Database();
