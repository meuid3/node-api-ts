import db from '../config/Database';
import { EntidadeInterface } from '../interface/EntidadeInterface';
import { UsuarioInterface } from '../interface/Usuario'

class Usuario implements EntidadeInterface{

  public async create(usuarioRequest: UsuarioInterface) {
    try {
      let query = `
        INSERT INTO tb_usuario (usuario, nome, email, skype, discord, telefone, senha, ativo)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
      `;
      const { usuario, nome, email, skype, discord, telefone, senha, ativo } = usuarioRequest;
      const params = [usuario, nome, email, skype, discord, telefone, senha, ativo]
      const result = await db.query(query, params);
      return result.rows;

    } catch(e) {
      console.log(e)
      return {message: "Erro na persistencia dos dados!"}
    }
  }
  
  public async update(usuarioRequest: UsuarioInterface) {
    try {
      const { usuario, nome, email, skype, discord, telefone, senha, ativo, id } =  usuarioRequest;
      let query = `
        UPDATE tb_usuario
        SET usuario = $1, nome = $2, email = $3, skype = $4, 
            discord = $5, telefone = $6, senha = $7, ativo = $8
        WHERE tb_usuario.id = $9
        RETURNING *
      `;
      const params = [usuario, nome, email, skype, discord, telefone, senha, ativo, id]
      const result = await db.query(query, params);
      return result.rows;

    } catch(e) {
      return {message: "Erro na persistencia dos dados!"}
    }
  }

  public async delete(id: any) {
    try{
      let query = `DELETE FROM tb_usuario WHERE tb_usuario.id = $1 RETURNING *`;
      const result = await db.query(query,[id]);
      return result;
    } catch(e) {
      return {message: "Erro ao executar a instrução!"}
    }
  }

  public async findAll() {
    try {
      let query = `SELECT * FROM tb_usuario`;
      const result = await db.query(query);
      return result.rows;
    } catch(e) {
      return {message: "Erro ao executar a instrução!"}
    }
  }
   
}
export default Usuario;