import express from 'express';
import routes from './routes';

class Server {

  public express;

  constructor() {
    this.express = express();
    this.express.listen(3333);
    this.express.use(express.json());
    this.routes();
  }

  private routes(): void {
    this.express.use(routes);
  }

}
export default new Server().express;