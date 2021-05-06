class Environment {
  
  public static port = 3000;

  public static dbConnection = {
    user:'postgres',
    host:'localhost',
    database: 'node',
    password:'root',
    port:5432
  }
}
export default Environment;