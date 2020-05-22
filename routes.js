const express =  require('express');

const rotas = express.Router();

const clienteController = require ('./src/controllers/clienteController');

rotas.post('/cliente', clienteController.create);
rotas.get('/cliente', clienteController.index);
rotas.put('/cliente/:id', clienteController.update);
rotas.delete('/cliente/:id', clienteController.delete);


module.exports = rotas;