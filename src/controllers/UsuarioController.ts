import { Request, Response } from 'express';

class UsuarioController {

  public criarUsuario( request: Request, response : Response ) {
    const user = request.body;
    return response.json(user);
  }

}
export default new UsuarioController();