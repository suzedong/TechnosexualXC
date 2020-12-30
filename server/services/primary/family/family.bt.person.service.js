const {
  BaseService
} = require('xc-core');

class FamilyBtPersonService extends BaseService {

  constructor(app) {
    super(app);
    this.family = app.$dbs.primary.family;
  }

  async belongsTo(req, res) {
    return await this.family.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = FamilyBtPersonService;