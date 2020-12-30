const {
  BaseRouter
} = require('xc-core');

class FamilyHmFamilyitemRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyMiddleware = app.$middlewares.primary.FamilyMiddleware;
    this.FamilyHmFamilyitemService = app.$services.primary.FamilyHmFamilyitemService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('FamilyHmFamilyitemRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.FamilyHmFamilyitemService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FamilyHmFamilyitemService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.FamilyHmFamilyitemService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FamilyHmFamilyitemService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.FamilyHmFamilyitemService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FamilyHmFamilyitemService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FamilyHmFamilyitemService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.FamilyHmFamilyitemService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.FamilyHmFamilyitemService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/family*",this.FamilyMiddleware.default)

    router.get('/api/v1/family/has/familyitem', this.FamilyMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/family/:parentId/familyitem', this.FamilyMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/family/:parentId/familyitem', this.FamilyMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/family/:parentId/familyitem/findOne', this.FamilyMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/family/:parentId/familyitem/groupby/:columnName',this.FamilyMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/family/:parentId/familyitem/distribution/:columnName',this.FamilyMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/family/:parentId/familyitem/distinct/:columnName',this.FamilyMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/family/:parentId/familyitem/aggregate/:columnName',this.FamilyMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/family/:parentId/familyitem/count', this.FamilyMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/family/:parentId/familyitem/bulk',this.FamilyMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/family/:parentId/familyitem/bulk',this.FamilyMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/family/:parentId/familyitem/bulk',this.FamilyMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/family/:parentId/familyitem/:id', this.FamilyMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/family/:parentId/familyitem/:id', this.FamilyMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/family/:parentId/familyitem/:id', this.FamilyMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/family/:parentId/familyitem/:id/exists', this.FamilyMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = FamilyHmFamilyitemRouter;