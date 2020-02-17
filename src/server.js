const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

require('dotenv').config();

class App {
  constructor() {
    this.app = express();
    this.isDev = process.env.NODE_ENV === 'development';

    this.middlewares();
    this.views();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
  }

  views() {
    this.app.engine('hbs', hbs({
      extname: 'hbs',
      defaultLayout: 'layout',
      layoutsDir: path.join(__dirname, 'app', 'views'),
    }));
    this.app.set('views', path.join(__dirname, 'app', 'views'));
    this.app.set('view engine', 'hbs');
  }

  routes() {
    this.app.use(require('./routes.js'));
  }
}

module.exports = new App().app;
