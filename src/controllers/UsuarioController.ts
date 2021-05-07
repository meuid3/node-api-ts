import { Request, Response } from 'express';
import UsuarioBO from '../business/UsuarioBO';

class UsuarioController {

  public async create( request: Request, response : Response ) {
    const usuarioBO = new UsuarioBO();
    const create =  await usuarioBO.create(request.body);
    return response.json(create);
  }

  public async update( request: Request, response: Response) {
    const usuarioBO = new UsuarioBO();
    const user = await usuarioBO.update(request.body);
    return response.json(user);
  }

  public async findAll( request: Request, response: Response) {
    const usuarioBO = new UsuarioBO();
    const user = await usuarioBO.findAll();
    return response.json(user);
  }

}
export default new UsuarioController();