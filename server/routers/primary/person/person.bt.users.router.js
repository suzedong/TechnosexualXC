const {
  BaseRouter
} = require('xc-core');

class PersonBtUsersRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PersonMiddleware = app.$middlewares.primary.PersonMiddleware;
    this.PersonBtUsersService = app.$services.primary.PersonBtUsersService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.PersonBtUsersService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/person*",this.PersonMiddleware.default)
    router.get('/api/v1/person/belongs/:parents', this.PersonMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = PersonBtUsersRouter;