import { UsuarioInterface } from '../interface/Usuario';
import Usuario from '../models/Usuario';

class UsuarioBO {

  private usuario : Usuario;

  constructor() {
    this.usuario = new Usuario();
  }
  
  public async findAll() {
    const usuario = new Usuario();
    return await usuario.findAll();
  }

  public async create(usuario: UsuarioInterface) {
    return await this.usuario.create(usuario);
  }

  public async update(usuario: UsuarioInterface, idUsuario?: any) {
    if(idUsuario)
      usuario.id = idUsuario;

    const update = await this.usuario.update(usuario);
    return update; 
  }
}
export default UsuarioBO;