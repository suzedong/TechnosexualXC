module.exports = {
  tableName: 'familyitem',
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
      columnName: 'family_id',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'person_id',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'familyrole_id',
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
  hasMany: [],
  belongsTo: [{
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
  }, {
    "constraintName": "familyitem_family_id_foreign",
    "tableName": "familyitem",
    "columnName": "family_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "family",
    "referencedColumnName": "id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "CASCADE",
    "tableSchema": "txc"
  }, {
    "constraintName": "familyitem_person_id_foreign",
    "tableName": "familyitem",
    "columnName": "person_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "person",
    "referencedColumnName": "id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "CASCADE",
    "tableSchema": "txc"
  }],
  dbType: 'mysql'
}