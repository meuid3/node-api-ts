import { Request, Response } from 'express';
import UsuarioBO from '../business/UsuarioBO';

class UsuarioController {

  public criarUsuario( request: Request, response : Response ) {
    const usuarioBO = new UsuarioBO();
    const user = request.body;
    return response.json(user);
  }

  public async findAll( request: Request, response: Response) {
    const usuarioBO = new UsuarioBO();
    const user = await usuarioBO.findAll();
    return response.json(user);
  }

}
export default new UsuarioController();