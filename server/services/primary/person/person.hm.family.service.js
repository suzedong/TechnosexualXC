const {
  BaseService
} = require('xc-core');

class PersonHmFamilyService extends BaseService {

  constructor(app) {
    super(app);
    this.person = app.$dbs.primary.person;
    this.family = app.$dbs.primary.family;
  }



  async read(req, res) {
    let data = await this.family.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.family.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.family.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.family.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.family.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.family.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.family.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.person.hasManyChildren({
      child: 'family',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.person.hasManyList({
      ...req.query,
      childs: `family`
    })
  }

}

module.exports = PersonHmFamilyService;