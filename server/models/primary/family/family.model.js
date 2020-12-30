const {
  BaseModelSql
} = require('xc-data-mapper');

class family extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./family.meta.js')
    });

  }

}


module.exports = family;