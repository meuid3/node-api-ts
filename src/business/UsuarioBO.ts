import Usuario from '../models/Usuario';

class UsuarioBO {
  
  public async findAll() {
    const usuario = new Usuario();
    return await usuario.findAll();
  }
}
export default UsuarioBO;