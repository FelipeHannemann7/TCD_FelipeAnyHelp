const { Cadastro } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/cadastros - retorna todos os cadastros que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const cadastros = await Cadastro.findAll();
      return res.send(cadastros);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },
  /**
   * GET /cadastros/:id - retorna um cadastro com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },
  /**
   * cadastro /cadastros - recebe um json com dados de um cadastro e cria o cadastro
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const cadastro = await Cadastro.create(req.body);
      return res.status(201).send(cadastro);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },
  /**
   * PUT /cadastros/:id - Atualiza um cadastro com novas informações
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