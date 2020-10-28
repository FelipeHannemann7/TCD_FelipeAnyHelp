
module.exports = (sequelize, DataType) => sequelize.define('cadastro', {
  user: {
    type: DataType.INTEGER,
    allowNull: true
  },
  emal: {
    type: DataType.STRING,
  },
  creationDate: {
    type: DataType.DATE
  },
  senha: {
    type: DataType.STRING
  }
})