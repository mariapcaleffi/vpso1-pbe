const express = require('express')
const router = express.Router()

const clientes = require('./controller/controller_clientes')
const telefone = require('./controller/controller_telefone')
const carro = require('./controller/controller_carros')

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.post('/carros', carro.create);
router.get('/carros', carro.read);

module.exports = router;
