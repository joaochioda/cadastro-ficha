const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const ObjetoController = require('./controllers/ObjetoController');
const ReportController = require('./controllers/ReportController');


const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

routes.post('/users/:user_id/objetos', ObjetoController.store);
routes.get('/users/:user_id/objetos', ObjetoController.index);
routes.delete('/users/:user_id/objetos', ObjetoController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;
