import { Request, Response } from 'express';
import UsuarioBO from '../business/UsuarioBO';

class UsuarioController {

  public async criarUsuario( request: Request, response : Response ) {
    const usuarioBO = new UsuarioBO();
    const create =  await usuarioBO.criarUsuario(request.body);
    return response.json(create);
  }

  public async findAll( request: Request, response: Response) {
    const usuarioBO = new UsuarioBO();
    const user = await usuarioBO.findAll();
    return response.json(user);
  }

}
export default new UsuarioController();