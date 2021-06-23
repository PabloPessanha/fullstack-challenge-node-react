const Youch = require('youch');
const express = require('express');
require('dotenv').config();
require('express-async-errors');
require('./database');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        
        return res.status(500).json(errors);
      }
      next();
    });
  }
}

module.exports = new App().server;