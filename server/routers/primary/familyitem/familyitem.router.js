const {
  BaseRouter
} = require('xc-core');

class FamilyitemRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyitemService = app.$services.primary.FamilyitemService;
    this.FamilyitemMiddleware = app.$middlewares.primary.FamilyitemMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.FamilyitemService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.FamilyitemService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.FamilyitemService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FamilyitemService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FamilyitemService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FamilyitemService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FamilyitemService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.FamilyitemService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.FamilyitemService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.FamilyitemService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.FamilyitemService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.FamilyitemService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.FamilyitemService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.FamilyitemService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.FamilyitemService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/familyitem*",this.FamilyitemMiddleware.default)

    router.get('/api/v1/familyitem', this.FamilyitemMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/familyitem', this.FamilyitemMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/familyitem/findOne', this.FamilyitemMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/familyitem/groupby/:columnName', this.FamilyitemMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/familyitem/distribution/:columnName', this.FamilyitemMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/familyitem/distinct/:columnName', this.FamilyitemMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/familyitem/aggregate/:columnName', this.FamilyitemMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/familyitem/count', this.FamilyitemMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/familyitem/bulk', this.FamilyitemMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/familyitem/bulk', this.FamilyitemMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/familyitem/bulk', this.FamilyitemMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/familyitem/:id', this.FamilyitemMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/familyitem/:id', this.FamilyitemMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/familyitem/:id', this.FamilyitemMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/familyitem/:id/exists', this.FamilyitemMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = FamilyitemRouter;