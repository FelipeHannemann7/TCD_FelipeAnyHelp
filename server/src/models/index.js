const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './instavue.db',
  logging: true // se verdadeiro, vai logar as queries SQL no terminal durante a execução
});

sequelize.CadastroUser = sequelize.import('./CadastroUser.js');
sequelize.Principal = sequelize.import('./Principal.js');

// Sincroniza as definições de models com o banco de dados
sequelize.sync();

module.exports = sequelize;