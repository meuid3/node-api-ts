import db from '../config/Database';
import { UsuarioInterface } from '../interface/Usuario'

class Usuario {

  public async findAll() {
    let query = `SELECT * FROM tb_usuario`;
    const result = await db.query(query);
    return result.rows;
  }

  public async criarUsuario(user: UsuarioInterface): Promise<any> {
    try {
      let query = `
        INSERT INTO tb_usuario (usuario, nome, email, skype, discord, telefone, senha)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
      `;
      const { usuario, nome, email, skype, discord, telefone, senha } =  user;
      const params = [usuario, nome, email, skype, discord, telefone, senha]
      const result = await db.query(query, params);
      return result.rows;

    } catch(e) {
      console.log(e);
      return {message: "Erro ao persistir os dados!"}
    }
  }
}
export default Usuario;