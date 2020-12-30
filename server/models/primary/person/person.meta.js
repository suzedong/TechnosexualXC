module.exports = {
  tableName: 'person',
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
      columnName: 'user_id',
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
      columnName: 'openid',
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
      columnName: 'session_key',
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
      columnName: 'mobile_phone',
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
      columnName: 'avatarUrl',
      type: 'text',
      dataType: 'text',
      data_type_x_precision: "65535",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'city',
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
      columnName: 'country',
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
      columnName: 'gender',
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
      columnName: 'language',
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
      columnName: 'nickName',
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
      columnName: 'province',
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
      columnName: 'unionId',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "constraintName": "family_person_id_foreign",
    "tableName": "family",
    "columnName": "person_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "person",
    "referencedColumnName": "id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "CASCADE",
    "tableSchema": "txc"
  }],
  belongsTo: [],
  dbType: 'mysql'
}