import express from 'express';
import  UsuarioController from './controllers/UsuarioController';

const routes = express.Router();


routes.post('/usuario', UsuarioController.create);
routes.post('/usuario/:id/alterar', UsuarioController.update);
routes.get('/usuario', UsuarioController.findAll);

export default routes;