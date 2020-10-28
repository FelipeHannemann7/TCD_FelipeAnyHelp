const express = require('express');
const router = express.Router();

const CadastroController = require('./controllers/CadastroController');

// Implementadas
router.get('/login', [], CadastroController.find);
router.post('/login', [], CadastroController.create);

// TODO
router.get('/login/:id', [], CadastroController.findOne);
router.put('/login/:id', [], CadastroController.update);
router.delete('/login/:id', [], CadastroController.delete);

module.exports = (app) => app.use(router);