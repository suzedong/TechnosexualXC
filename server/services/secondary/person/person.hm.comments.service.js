const {
  BaseService
} = require('xc-core');

class PersonHmCommentsService extends BaseService {

  constructor(app) {
    super(app);
    this.person = app.$dbs.secondary.person;
    this.comments = app.$dbs.secondary.comments;
  }



  async read(req, res) {
    let data = await this.comments.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.comments.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.comments.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.comments.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.comments.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.comments.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.comments.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'person',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.person.hasManyChildren({
      child: 'comments',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.person.hasManyList({
      ...req.query,
      childs: `comments`
    })
  }

}

module.exports = PersonHmCommentsService;