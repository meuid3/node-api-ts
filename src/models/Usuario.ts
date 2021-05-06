import db from '../config/Database';

class Usuario {

  public async findAll() {

    let query = `SELECT * FROM tb_usuario`;
    const result = await db.query(query);
    return result.rows;
  }
}
export default Usuario;