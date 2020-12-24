const {
  BaseService
} = require('xc-core');

class PersonBtUsersService extends BaseService {

  constructor(app) {
    super(app);
    this.person = app.$dbs.primary.person;
  }

  async belongsTo(req, res) {
    return await this.person.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = PersonBtUsersService;