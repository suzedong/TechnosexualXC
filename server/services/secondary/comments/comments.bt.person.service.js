const {
  BaseService
} = require('xc-core');

class CommentsBtPersonService extends BaseService {

  constructor(app) {
    super(app);
    this.comments = app.$dbs.secondary.comments;
  }

  async belongsTo(req, res) {
    return await this.comments.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = CommentsBtPersonService;