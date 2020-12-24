const {
  BaseRouter
} = require('xc-core');

class PersonRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PersonService = app.$services.secondary.PersonService;
    this.PersonMiddleware = app.$middlewares.secondary.PersonMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.PersonService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.PersonService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.PersonService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PersonService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PersonService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PersonService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PersonService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.PersonService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.PersonService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.PersonService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.PersonService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.PersonService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.PersonService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.PersonService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.PersonService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/w1/person*",this.PersonMiddleware.default)

    router.get('/api/w1/person', this.PersonMiddleware.default, this.catchErr(this.list))
    router.post('/api/w1/person', this.PersonMiddleware.default, this.catchErr(this.create))
    router.get('/api/w1/person/findOne', this.PersonMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/w1/person/groupby/:columnName', this.PersonMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/w1/person/distribution/:columnName', this.PersonMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/w1/person/distinct/:columnName', this.PersonMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/w1/person/aggregate/:columnName', this.PersonMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/w1/person/count', this.PersonMiddleware.default, this.catchErr(this.count));
    router.post('/api/w1/person/bulk', this.PersonMiddleware.default, this.catchErr(this.createb))
    router.put('/api/w1/person/bulk', this.PersonMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/w1/person/bulk', this.PersonMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/w1/person/:id', this.PersonMiddleware.default, this.catchErr(this.read))
    router.put('/api/w1/person/:id', this.PersonMiddleware.default, this.catchErr(this.update))
    router.delete('/api/w1/person/:id', this.PersonMiddleware.default, this.catchErr(this.delete))
    router.get('/api/w1/person/:id/exists', this.PersonMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = PersonRouter;