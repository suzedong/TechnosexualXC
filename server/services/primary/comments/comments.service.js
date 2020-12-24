const {
  BaseService
} = require('xc-core');

class CommentsService extends BaseService {

  constructor(app) {
    super(app);
    this.comments = app.$dbs.primary.comments;
  }

  async create(req, res) {
    let data = await this.comments.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.comments.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.comments.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.comments.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.comments.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.comments.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.comments.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.comments.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.comments.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.comments.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.comments.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.comments.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.comments.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.comments.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.comments.delb(req.body);
    return data;
  }

}

module.exports = CommentsService;