import express from 'express';
import  UsuarioController from './controllers/UsuarioController';

const routes = express.Router();

routes.post('/usuario', UsuarioController.criarUsuario);
routes.get('/usuario', UsuarioController.findAll);

export default routes;