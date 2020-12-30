const {
  BaseRouter
} = require('xc-core');

class FamilyitemBtPersonRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyitemMiddleware = app.$middlewares.primary.FamilyitemMiddleware;
    this.FamilyitemBtPersonService = app.$services.primary.FamilyitemBtPersonService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FamilyitemBtPersonService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/familyitem*",this.FamilyitemMiddleware.default)
    router.get('/api/v1/familyitem/belongs/:parents', this.FamilyitemMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FamilyitemBtPersonRouter;