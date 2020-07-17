const express = require('express')
const routes = express.Router();

const ClientController = require('./controllers/ClientController');

//Rotas
routes.get('/clients', ClientController.index);
routes.post('/client', ClientController.create);
routes.delete('/client/:id', ClientController.delete);

module.exports = routes;