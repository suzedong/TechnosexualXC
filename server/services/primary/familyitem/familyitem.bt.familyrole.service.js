const {
  BaseService
} = require('xc-core');

class FamilyitemBtFamilyroleService extends BaseService {

  constructor(app) {
    super(app);
    this.familyitem = app.$dbs.primary.familyitem;
  }

  async belongsTo(req, res) {
    return await this.familyitem.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = FamilyitemBtFamilyroleService;