
module.exports = (sequelize, DataType) => sequelize.define('principal', {
  MsgDabafo: {
    type: DataType.STRING,
  },
  creationDate: {
    type: DataType.DATE
  }
})