const {
  BaseService
} = require('xc-core');

class PersonService extends BaseService {

  constructor(app) {
    super(app);
    this.person = app.$dbs.primary.person;
  }

  async create(req, res) {
    let data = await this.person.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.person.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.person.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.person.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.person.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.person.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.person.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.person.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.person.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.person.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.person.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.person.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.person.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.person.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.person.delb(req.body);
    return data;
  }

}

module.exports = PersonService;