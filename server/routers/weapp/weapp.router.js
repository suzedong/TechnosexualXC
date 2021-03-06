const {BaseRouter} = require('xc-core');

class WeappRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LoginService = app.$services.LoginService;
    this._mapRoutes(app.$router);
  }

  async login(req, res) {
    // console.log(req, res)
    let data = await this.LoginService.login(req, res);
    res.json(data)
  }

  async getUserInfo(req, res) {
    // console.log(req, res)
    let data = await this.LoginService.getUserInfo(req, res);
    res.json(data)
  }

  _mapRoutes(router) {
    router.get('/weapp/login', this.catchErr(this.login));
    router.post('/weapp/getUserInfo', this.catchErr(this.getUserInfo));
  }

}

module.exports = WeappRouter;