import express from 'express';
import  UsuarioController from './controllers/UsuarioController';

const routes = express.Router();

routes.post('/usuario', UsuarioController.criarUsuario);

export default routes;