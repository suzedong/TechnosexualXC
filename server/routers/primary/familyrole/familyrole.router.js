const {
  BaseRouter
} = require('xc-core');

class FamilyroleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyroleService = app.$services.primary.FamilyroleService;
    this.FamilyroleMiddleware = app.$middlewares.primary.FamilyroleMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.FamilyroleService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.FamilyroleService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.FamilyroleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FamilyroleService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FamilyroleService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FamilyroleService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FamilyroleService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.FamilyroleService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.FamilyroleService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.FamilyroleService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.FamilyroleService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.FamilyroleService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.FamilyroleService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.FamilyroleService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.FamilyroleService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/familyrole*",this.FamilyroleMiddleware.default)

    router.get('/api/v1/familyrole', this.FamilyroleMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/familyrole', this.FamilyroleMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/familyrole/findOne', this.FamilyroleMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/familyrole/groupby/:columnName', this.FamilyroleMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/familyrole/distribution/:columnName', this.FamilyroleMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/familyrole/distinct/:columnName', this.FamilyroleMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/familyrole/aggregate/:columnName', this.FamilyroleMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/familyrole/count', this.FamilyroleMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/familyrole/bulk', this.FamilyroleMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/familyrole/bulk', this.FamilyroleMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/familyrole/bulk', this.FamilyroleMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/familyrole/:id', this.FamilyroleMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/familyrole/:id', this.FamilyroleMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/familyrole/:id', this.FamilyroleMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/familyrole/:id/exists', this.FamilyroleMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = FamilyroleRouter;