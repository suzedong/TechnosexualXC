const {
  BaseModelSql
} = require('xc-data-mapper');

class person extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./person.meta.js')
    });

  }

}


module.exports = person;