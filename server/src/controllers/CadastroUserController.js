const { CadastroUser } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/CadastroUser - retorna todos os cadastros que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const cadastrousers = await CadastroUser.findAll();
      return res.send(cadastrousers);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },
  /**
   * GET /CadastroUser/:id - retorna um cadastro com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },
  /**
   * cadastro /CadastroUser - recebe um json com dados de um cadastro e cria o cadastro
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const cadastrousers = await CadastroUser.create(req.body.user);
      return res.status(201).send(cadastrousers);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },
  /**
   * PUT /CadastroUser/:id - Atualiza um cadastro com novas informações
   * @param {*} req 
   * @param {*} res 
   */
  async update(req, res) {
    return res.send({});
  },
  /**
   * DELETE /cadastros/:id - Remove um cadastro da base de dados
   * @param {*} req 
   * @param {*} res 
   */
  async delete(req, res) {
    return res.send({});
  }
}