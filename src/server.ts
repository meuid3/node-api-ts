import express from 'express';
import routes from './routes';
import Environment from './config/Environment';

class Server {

  public express;

  constructor() {
    this.express = express();
    this.express.listen(Environment.port);
    this.express.use(express.json());
    this.routes();
  }

  private routes(): void {
    this.express.use(routes);
  }

}
export default new Server().express;