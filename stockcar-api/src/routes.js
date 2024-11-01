const express = require('express')
const router = express.Router()

const clientes = require('./controller/controller_clientes')
const telefone = require('./controller/controller_telefone')
const carro = require('./controller/controller_carros')

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);
router.delete('/clientes', clientes.deletar);

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone', telefone.update);
router.delete('/telefone', telefone.deletar);

router.post('/carros', carro.create);
router.get('/carros', carro.read);
router.put('/carros', carro.update);
router.delete('/carros', carro.deletar);

module.exports = router;
