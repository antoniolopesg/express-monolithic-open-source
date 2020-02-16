const express = require('express');
require('dotenv').config();

class App {
  constructor() {
    this.app = express();
    this.isDev = process.env.NODE_ENV === 'development';

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(require('./routes.js'));
  }
}

module.exports = new App().app;
