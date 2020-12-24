const {
  BaseRouter
} = require('xc-core');

class CommentsBtPersonRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CommentsMiddleware = app.$middlewares.secondary.CommentsMiddleware;
    this.CommentsBtPersonService = app.$services.secondary.CommentsBtPersonService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.CommentsBtPersonService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/w1/comments*",this.CommentsMiddleware.default)
    router.get('/api/w1/comments/belongs/:parents', this.CommentsMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = CommentsBtPersonRouter;