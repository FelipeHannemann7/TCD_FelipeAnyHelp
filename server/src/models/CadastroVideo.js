
module.exports = (sequelize, DataType) => sequelize.define('cadastrovideo', {
  url: {
    type: DataType.STRING
  },
  creationDate: {
    type: DataType.DATE
  }
})