const {
  BaseService
} = require('xc-core');

class FamilyService extends BaseService {

  constructor(app) {
    super(app);
    this.family = app.$dbs.primary.family;
  }

  async create(req, res) {
    let data = await this.family.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.family.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.family.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.family.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.family.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.family.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.family.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.family.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.family.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.family.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.family.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.family.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.family.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.family.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.family.delb(req.body);
    return data;
  }

}

module.exports = FamilyService;