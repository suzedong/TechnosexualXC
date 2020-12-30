const {
  BaseService
} = require('xc-core');

class PersonHmFamilyitemService extends BaseService {

  constructor(app) {
    super(app);
    this.person = app.$dbs.primary.person;
    this.familyitem = app.$dbs.primary.familyitem;
  }



  async read(req, res) {
    let data = await this.familyitem.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.familyitem.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.familyitem.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.familyitem.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.familyitem.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.familyitem.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.familyitem.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.person.hasManyChildren({
      child: 'familyitem',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.person.hasManyList({
      ...req.query,
      childs: `familyitem`
    })
  }

}

module.exports = PersonHmFamilyitemService;