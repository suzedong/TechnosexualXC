const {
  BaseService
} = require('xc-core');

class FamilyitemService extends BaseService {

  constructor(app) {
    super(app);
    this.familyitem = app.$dbs.primary.familyitem;
  }

  async create(req, res) {
    let data = await this.familyitem.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.familyitem.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.familyitem.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.familyitem.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.familyitem.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.familyitem.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.familyitem.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.familyitem.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.familyitem.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.familyitem.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.familyitem.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.familyitem.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.familyitem.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.familyitem.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.familyitem.delb(req.body);
    return data;
  }

}

module.exports = FamilyitemService;