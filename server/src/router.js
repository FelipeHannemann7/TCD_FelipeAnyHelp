const express = require('express');
const router = express.Router();

const CadastroUserController = require('./controllers/CadastroUserController');
const CadastroVideoController = require('./controllers/CadastroVideoController');
const CadastroPsicologoController = require('./controllers/CadastroPsicologoController');
const PrincipalController = require('./controllers/PrincipalController');
const AuthController = require('./controllers/AuthController');

// Implementadas
router.get('/CadastroUser', [], CadastroUserController.find);
router.post('/CadastroUser', [], CadastroUserController.create);




// Auth
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);


// Implementadas
router.get('/CadastroVideo', [], CadastroVideoController.find);
router.post('/CadastroVideo', [], CadastroVideoController.create);


// Implementadas
router.get('/CadastroPsicologo', [], CadastroPsicologoController.find);
router.post('/CadastroPsicologo', [], CadastroPsicologoController.create);





// Implementadas
router.get('/Principal', [], PrincipalController.find);
router.post('/Principal', [], PrincipalController.create);


module.exports = (app) => app.use(router);