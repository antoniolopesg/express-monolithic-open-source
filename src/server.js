import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';
import './database';

dotenv.config();

class Server {
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
    this.app.use(routes);
  }
}

export default new Server().app;
