const {
  BaseRouter
} = require('xc-core');

class FamilyRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyService = app.$services.primary.FamilyService;
    this.FamilyMiddleware = app.$middlewares.primary.FamilyMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.FamilyService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.FamilyService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.FamilyService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FamilyService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FamilyService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FamilyService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FamilyService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.FamilyService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.FamilyService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.FamilyService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.FamilyService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.FamilyService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.FamilyService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.FamilyService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.FamilyService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/family*",this.FamilyMiddleware.default)

    router.get('/api/v1/family', this.FamilyMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/family', this.FamilyMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/family/findOne', this.FamilyMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/family/groupby/:columnName', this.FamilyMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/family/distribution/:columnName', this.FamilyMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/family/distinct/:columnName', this.FamilyMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/family/aggregate/:columnName', this.FamilyMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/family/count', this.FamilyMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/family/bulk', this.FamilyMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/family/bulk', this.FamilyMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/family/bulk', this.FamilyMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/family/:id', this.FamilyMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/family/:id', this.FamilyMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/family/:id', this.FamilyMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/family/:id/exists', this.FamilyMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = FamilyRouter;