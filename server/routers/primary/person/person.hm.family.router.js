const {
  BaseRouter
} = require('xc-core');

class PersonHmFamilyRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PersonMiddleware = app.$middlewares.primary.PersonMiddleware;
    this.PersonHmFamilyService = app.$services.primary.PersonHmFamilyService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('PersonHmFamilyRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.PersonHmFamilyService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PersonHmFamilyService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.PersonHmFamilyService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PersonHmFamilyService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.PersonHmFamilyService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PersonHmFamilyService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PersonHmFamilyService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.PersonHmFamilyService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.PersonHmFamilyService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/person*",this.PersonMiddleware.default)

    router.get('/api/v1/person/has/family', this.PersonMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/person/:parentId/family', this.PersonMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/person/:parentId/family', this.PersonMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/person/:parentId/family/findOne', this.PersonMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/person/:parentId/family/groupby/:columnName',this.PersonMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/person/:parentId/family/distribution/:columnName',this.PersonMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/person/:parentId/family/distinct/:columnName',this.PersonMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/person/:parentId/family/aggregate/:columnName',this.PersonMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/person/:parentId/family/count', this.PersonMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/person/:parentId/family/bulk',this.PersonMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/person/:parentId/family/bulk',this.PersonMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/person/:parentId/family/bulk',this.PersonMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/person/:parentId/family/:id', this.PersonMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/person/:parentId/family/:id', this.PersonMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/person/:parentId/family/:id', this.PersonMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/person/:parentId/family/:id/exists', this.PersonMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = PersonHmFamilyRouter;