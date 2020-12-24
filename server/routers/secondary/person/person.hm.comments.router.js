const {
  BaseRouter
} = require('xc-core');

class PersonHmCommentsRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PersonMiddleware = app.$middlewares.secondary.PersonMiddleware;
    this.PersonHmCommentsService = app.$services.secondary.PersonHmCommentsService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('PersonHmCommentsRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.PersonHmCommentsService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PersonHmCommentsService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.PersonHmCommentsService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PersonHmCommentsService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.PersonHmCommentsService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PersonHmCommentsService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PersonHmCommentsService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.PersonHmCommentsService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.PersonHmCommentsService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/w1/person*",this.PersonMiddleware.default)

    router.get('/api/w1/person/has/comments', this.PersonMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/w1/person/:parentId/comments', this.PersonMiddleware.default, this.catchErr(this.list));

    router.post('/api/w1/person/:parentId/comments', this.PersonMiddleware.default, this.catchErr(this.create))
    router.get('/api/w1/person/:parentId/comments/findOne', this.PersonMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/w1/person/:parentId/comments/groupby/:columnName',this.PersonMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/w1/person/:parentId/comments/distribution/:columnName',this.PersonMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/w1/person/:parentId/comments/distinct/:columnName',this.PersonMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/w1/person/:parentId/comments/aggregate/:columnName',this.PersonMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/w1/person/:parentId/comments/count', this.PersonMiddleware.default, this.catchErr(this.count));
    //router.post('/api/w1/person/:parentId/comments/bulk',this.PersonMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/w1/person/:parentId/comments/bulk',this.PersonMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/w1/person/:parentId/comments/bulk',this.PersonMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/w1/person/:parentId/comments/:id', this.PersonMiddleware.default, this.catchErr(this.read))
    router.put('/api/w1/person/:parentId/comments/:id', this.PersonMiddleware.default, this.catchErr(this.update))
    router.delete('/api/w1/person/:parentId/comments/:id', this.PersonMiddleware.default, this.catchErr(this.delete))
    router.get('/api/w1/person/:parentId/comments/:id/exists', this.PersonMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = PersonHmCommentsRouter;