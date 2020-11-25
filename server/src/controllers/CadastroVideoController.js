const { CadastroVideo } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/CadastroVideo - retorna todos os cadastros que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const cadastrovideos = await CadastroVideo.findAll();
      return res.send(cadastrovideos);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },
  /**
   * GET /CadastroVideo/:id - retorna um cadastro com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },
  /**
   * cadastro /CadastroVideo - recebe um json com dados de um cadastro e cria o cadastro
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const cadastrovideos = await CadastroVideo.create(req.body.video);
      return res.status(201).send(cadastrovideos);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },
  /**
   * PUT /CadastroVideo/:id - Atualiza um cadastro com novas informações
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