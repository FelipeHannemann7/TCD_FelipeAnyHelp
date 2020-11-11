const express = require('express');
const router = express.Router();

const CadastroUserController = require('./controllers/CadastroUserController');

// Implementadas
router.get('/CadastroUser', [], CadastroUserController.find);
router.post('/CadastroUser', [], CadastroUserController.create);

// TODO
router.get('/CadastroUser/:id', [], CadastroUserController.findOne);
router.put('/CadastroUser/:id', [], CadastroUserController.update);
router.delete('/CadastroUser/:id', [], CadastroUserController.delete);

module.exports = (app) => app.use(router);