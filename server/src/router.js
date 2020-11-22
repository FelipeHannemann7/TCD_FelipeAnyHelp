const express = require('express');
const router = express.Router();

const CadastroUserController = require('./controllers/CadastroUserController');
const CadastroVideoController = require('./controllers/CadastroVideoController');
const CadastroPsicologoController = require('./controllers/CadastroPsicologoController');
const PrincipalController = require('./controllers/PrincipalController');

// Implementadas
router.get('/CadastroUser', [], CadastroUserController.find);
router.post('/CadastroUser', [], CadastroUserController.create);

// TODO
router.get('/CadastroUser/:id', [], CadastroUserController.findOne);
router.put('/CadastroUser/:id', [], CadastroUserController.update);
router.delete('/CadastroUser/:id', [], CadastroUserController.delete);




// Implementadas
router.get('/CadastroVideo', [], CadastroVideoController.find);
router.post('/CadastroVideo', [], CadastroVideoController.create);

// TODO
router.get('/CadastroVideo/:id', [], CadastroVideoController.findOne);
router.put('/CadastroVideo/:id', [], CadastroVideoController.update);
router.delete('/CadastroVideo/:id', [], CadastroVideoController.delete);


// Implementadas
router.get('/CadastroPsicologo', [], CadastroPsicologoController.find);
router.post('/CadastroPsicologo', [], CadastroPsicologoController.create);

// TODO
router.get('/CadastroPsicologo/:id', [], CadastroPsicologoController.findOne);
router.put('/CadastroPsicologo/:id', [], CadastroPsicologoController.update);
router.delete('/CadastroPsicologo/:id', [], CadastroPsicologoController.delete);



// Implementadas
router.get('/Principal', [], PrincipalController.find);
router.post('/Principal', [], PrincipalController.create);

// TODO
router.get('/Principal/:id', [], PrincipalController.findOne);
router.put('/Principal/:id', [], PrincipalController.update);
router.delete('/Principal/:id', [], PrincipalController.delete);

module.exports = (app) => app.use(router);