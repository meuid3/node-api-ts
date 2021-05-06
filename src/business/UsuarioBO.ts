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

  public async criarUsuario(usuario: UsuarioInterface) {
    return await this.usuario.criarUsuario(usuario);
  }
}
export default UsuarioBO;