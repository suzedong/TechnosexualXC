const {
  BaseModelSql
} = require('xc-data-mapper');

class comments extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./comments.meta.js')
    });

  }

}


module.exports = comments;