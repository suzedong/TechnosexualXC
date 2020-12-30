const {
  BaseRouter
} = require('xc-core');

class PersonHmFamilyitemRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PersonMiddleware = app.$middlewares.primary.PersonMiddleware;
    this.PersonHmFamilyitemService = app.$services.primary.PersonHmFamilyitemService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('PersonHmFamilyitemRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.PersonHmFamilyitemService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PersonHmFamilyitemService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.PersonHmFamilyitemService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PersonHmFamilyitemService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.PersonHmFamilyitemService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PersonHmFamilyitemService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PersonHmFamilyitemService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.PersonHmFamilyitemService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.PersonHmFamilyitemService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/person*",this.PersonMiddleware.default)

    router.get('/api/v1/person/has/familyitem', this.PersonMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/person/:parentId/familyitem', this.PersonMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/person/:parentId/familyitem', this.PersonMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/person/:parentId/familyitem/findOne', this.PersonMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/person/:parentId/familyitem/groupby/:columnName',this.PersonMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/person/:parentId/familyitem/distribution/:columnName',this.PersonMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/person/:parentId/familyitem/distinct/:columnName',this.PersonMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/person/:parentId/familyitem/aggregate/:columnName',this.PersonMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/person/:parentId/familyitem/count', this.PersonMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/person/:parentId/familyitem/bulk',this.PersonMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/person/:parentId/familyitem/bulk',this.PersonMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/person/:parentId/familyitem/bulk',this.PersonMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/person/:parentId/familyitem/:id', this.PersonMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/person/:parentId/familyitem/:id', this.PersonMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/person/:parentId/familyitem/:id', this.PersonMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/person/:parentId/familyitem/:id/exists', this.PersonMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = PersonHmFamilyitemRouter;