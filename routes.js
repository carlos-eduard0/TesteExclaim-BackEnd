const express =  require('express');

const rotas = express.Router();

const clienteController = require ('./src/controllers/clienteController');
const carrosController = require ('./src/controllers/carrosController');
const revisaoController = require ('./src/controllers/revisaoController');

rotas.post('/cliente', clienteController.create);
rotas.get('/cliente', clienteController.index);
rotas.put('/cliente/:id', clienteController.update);
rotas.delete('/cliente/:id', clienteController.delete);
rotas.get('/cliente/:id', clienteController.indexOne);

rotas.put('/carros/:id', carrosController.update);
rotas.delete('/carros/:id', carrosController.delete);
rotas.post('/carros/:id', carrosController.create);
rotas.get('/carros/:id', carrosController.index);

rotas.post('/revisao/:id', revisaoController.create);
rotas.get('/revisao/:id', revisaoController.index);
rotas.delete('/revisao/:id', revisaoController.delete);
module.exports = rotas;