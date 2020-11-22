module.exports = (sequelize, DataType) => sequelize.define('cadastropsicologo', {
  nome: {
    type: DataType.STRING
  },
  endereco: {
    type: DataType.STRING
  },
  crp: {
    type: DataType.STRING
  },
  creationDate: {
    type: DataType.DATE
  }
})