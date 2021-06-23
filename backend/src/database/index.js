const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const { Director } = require('./models');

const models = [Director];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
