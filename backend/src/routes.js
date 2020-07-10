const express = require('express')
const routes = express.Router();

const ClientController = require('./controllers/ClientController');

//Rotas
routes.get('/client', ClientController.index);
routes.post('/clients', ClientController.create);
routes.delete('/clientes/:id', ClientController.delete);

module.exports = routes;