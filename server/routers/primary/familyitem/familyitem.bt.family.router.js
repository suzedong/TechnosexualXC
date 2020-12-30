const {
  BaseRouter
} = require('xc-core');

class FamilyitemBtFamilyRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FamilyitemMiddleware = app.$middlewares.primary.FamilyitemMiddleware;
    this.FamilyitemBtFamilyService = app.$services.primary.FamilyitemBtFamilyService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FamilyitemBtFamilyService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/familyitem*",this.FamilyitemMiddleware.default)
    router.get('/api/v1/familyitem/belongs/:parents', this.FamilyitemMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FamilyitemBtFamilyRouter;