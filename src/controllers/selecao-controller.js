import selecaoService from "../services/selecao-service.js";
class selecaoController {
  async hello(req, res) {
    const result = await selecaoService.hello();
    res.send(result);
  }

  async index(req, res) {
    const result = await selecaoService.findAll();
    res.json(result);
  }

  async show(req, res) {
    const id = req.params.id;
    try {
      const result = await selecaoService.findById(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error.message);
      res.status(404).json({ erro: error.message });
    }
  }

  async store(req, res) {
    const { selecao, grupo } = req.body;
    const result = await selecaoService.create(selecao, grupo);
    res.send(result);
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const { selecao, grupo } = req.body;

      const result = await selecaoService.update({ selecao, grupo }, id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ erro: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      const result = await selecaoService.delete(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ erro: error.message });
    }
  }
}

export default new selecaoController();
