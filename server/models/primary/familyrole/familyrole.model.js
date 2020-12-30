const {
  BaseModelSql
} = require('xc-data-mapper');

class familyrole extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./familyrole.meta.js')
    });

  }

}


module.exports = familyrole;