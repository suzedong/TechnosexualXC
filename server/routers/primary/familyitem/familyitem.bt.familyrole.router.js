const {
  BaseRouter
} = require('xc-core');

class FamilyitemBtFamilyroleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyitemMiddleware = app.$middlewares.primary.FamilyitemMiddleware;
    this.FamilyitemBtFamilyroleService = app.$services.primary.FamilyitemBtFamilyroleService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FamilyitemBtFamilyroleService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/familyitem*",this.FamilyitemMiddleware.default)
    router.get('/api/v1/familyitem/belongs/:parents', this.FamilyitemMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FamilyitemBtFamilyroleRouter;