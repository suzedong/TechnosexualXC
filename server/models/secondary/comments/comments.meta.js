module.exports = {
  tableName: 'comments',
  columns: [{
      columnName: 'id',
      type: 'integer',
      dataType: 'integer',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name',
      type: 'text',
      dataType: 'text',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'person_id',
      type: 'integer',
      dataType: 'integer',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [{
    "onUpdate": "NO ACTION",
    "onDelete": "NO ACTION",
    "tableName": "comments",
    "columnName": "person_id",
    "referencedTableName": "person",
    "referencedColumnName": "id",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "matchOption": "NONE"
  }],
  dbType: 'sqlite3'
}