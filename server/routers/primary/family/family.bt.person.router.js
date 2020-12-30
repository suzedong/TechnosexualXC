const {
  BaseRouter
} = require('xc-core');

class FamilyBtPersonRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyMiddleware = app.$middlewares.primary.FamilyMiddleware;
    this.FamilyBtPersonService = app.$services.primary.FamilyBtPersonService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FamilyBtPersonService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/family*",this.FamilyMiddleware.default)
    router.get('/api/v1/family/belongs/:parents', this.FamilyMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FamilyBtPersonRouter;