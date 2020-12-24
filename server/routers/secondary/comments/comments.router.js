const {
  BaseRouter
} = require('xc-core');

class CommentsRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CommentsService = app.$services.secondary.CommentsService;
    this.CommentsMiddleware = app.$middlewares.secondary.CommentsMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CommentsService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CommentsService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CommentsService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CommentsService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CommentsService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CommentsService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CommentsService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CommentsService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CommentsService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CommentsService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CommentsService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CommentsService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CommentsService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CommentsService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CommentsService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/w1/comments*",this.CommentsMiddleware.default)

    router.get('/api/w1/comments', this.CommentsMiddleware.default, this.catchErr(this.list))
    router.post('/api/w1/comments', this.CommentsMiddleware.default, this.catchErr(this.create))
    router.get('/api/w1/comments/findOne', this.CommentsMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/w1/comments/groupby/:columnName', this.CommentsMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/w1/comments/distribution/:columnName', this.CommentsMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/w1/comments/distinct/:columnName', this.CommentsMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/w1/comments/aggregate/:columnName', this.CommentsMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/w1/comments/count', this.CommentsMiddleware.default, this.catchErr(this.count));
    router.post('/api/w1/comments/bulk', this.CommentsMiddleware.default, this.catchErr(this.createb))
    router.put('/api/w1/comments/bulk', this.CommentsMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/w1/comments/bulk', this.CommentsMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/w1/comments/:id', this.CommentsMiddleware.default, this.catchErr(this.read))
    router.put('/api/w1/comments/:id', this.CommentsMiddleware.default, this.catchErr(this.update))
    router.delete('/api/w1/comments/:id', this.CommentsMiddleware.default, this.catchErr(this.delete))
    router.get('/api/w1/comments/:id/exists', this.CommentsMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CommentsRouter;