const {
  BaseService
} = require('xc-core');

class FamilyroleService extends BaseService {

  constructor(app) {
    super(app);
    this.familyrole = app.$dbs.primary.familyrole;
  }

  async create(req, res) {
    let data = await this.familyrole.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.familyrole.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.familyrole.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.familyrole.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.familyrole.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.familyrole.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.familyrole.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.familyrole.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.familyrole.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.familyrole.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.familyrole.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.familyrole.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.familyrole.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.familyrole.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.familyrole.delb(req.body);
    return data;
  }

}

module.exports = FamilyroleService;