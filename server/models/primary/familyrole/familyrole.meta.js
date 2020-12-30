module.exports = {
  tableName: 'familyrole',
  columns: [{
      columnName: 'id',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'created_at',
      type: 'timestamp',
      dataType: 'timestamp',
      default: "CURRENT_TIMESTAMP",
      columnDefault: "CURRENT_TIMESTAMP",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'updated_at',
      type: 'timestamp',
      dataType: 'timestamp',
      default: "CURRENT_TIMESTAMPT_TIMESTAMP",
      columnDefault: "CURRENT_TIMESTAMPT_TIMESTAMP",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'sort',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "constraintName": "familyitem_familyrole_id_foreign",
    "tableName": "familyitem",
    "columnName": "familyrole_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "familyrole",
    "referencedColumnName": "id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "CASCADE",
    "tableSchema": "txc"
  }],
  belongsTo: [],
  dbType: 'mysql'
}