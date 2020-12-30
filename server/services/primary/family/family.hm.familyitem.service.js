const {
  BaseService
} = require('xc-core');

class FamilyHmFamilyitemService extends BaseService {

  constructor(app) {
    super(app);
    this.family = app.$dbs.primary.family;
    this.familyitem = app.$dbs.primary.familyitem;
  }



  async read(req, res) {
    let data = await this.familyitem.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'family',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.familyitem.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'family',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.familyitem.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'family',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.familyitem.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'family',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.familyitem.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'family',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.familyitem.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'family',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.familyitem.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'family',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.family.hasManyChildren({
      child: 'familyitem',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.family.hasManyList({
      ...req.query,
      childs: `familyitem`
    })
  }

}

module.exports = FamilyHmFamilyitemService;