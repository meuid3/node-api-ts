  
import { Pool } from 'pg';
import Environment from './environment';

const db = new Pool(Environment.dbConnection);
export default db;
