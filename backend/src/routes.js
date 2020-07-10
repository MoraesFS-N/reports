const express = require('express')
const routes = express.Router();

const ClienteController = require('./controllers/ClienteController');

//Rotas

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.create);
routes.delete('/clientes/:id', ClienteController.delete);

module.exports = routes;