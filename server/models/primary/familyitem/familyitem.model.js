const {
  BaseModelSql
} = require('xc-data-mapper');

class familyitem extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./familyitem.meta.js')
    });

  }

}


module.exports = familyitem;