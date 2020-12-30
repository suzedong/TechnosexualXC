const {
  BaseRouter
} = require('xc-core');

class FamilyroleHmFamilyitemRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyroleMiddleware = app.$middlewares.primary.FamilyroleMiddleware;
    this.FamilyroleHmFamilyitemService = app.$services.primary.FamilyroleHmFamilyitemService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('FamilyroleHmFamilyitemRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.FamilyroleHmFamilyitemService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/familyrole*",this.FamilyroleMiddleware.default)

    router.get('/api/v1/familyrole/has/familyitem', this.FamilyroleMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/familyrole/:parentId/familyitem', this.FamilyroleMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/familyrole/:parentId/familyitem', this.FamilyroleMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/familyrole/:parentId/familyitem/findOne', this.FamilyroleMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/familyrole/:parentId/familyitem/groupby/:columnName',this.FamilyroleMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/familyrole/:parentId/familyitem/distribution/:columnName',this.FamilyroleMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/familyrole/:parentId/familyitem/distinct/:columnName',this.FamilyroleMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/familyrole/:parentId/familyitem/aggregate/:columnName',this.FamilyroleMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/familyrole/:parentId/familyitem/count', this.FamilyroleMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/familyrole/:parentId/familyitem/bulk',this.FamilyroleMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/familyrole/:parentId/familyitem/bulk',this.FamilyroleMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/familyrole/:parentId/familyitem/bulk',this.FamilyroleMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/familyrole/:parentId/familyitem/:id', this.FamilyroleMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/familyrole/:parentId/familyitem/:id', this.FamilyroleMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/familyrole/:parentId/familyitem/:id', this.FamilyroleMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/familyrole/:parentId/familyitem/:id/exists', this.FamilyroleMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = FamilyroleHmFamilyitemRouter;