const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ActivityStorageType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    StorageDesc: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_ActivityStorageType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_ActivityStorageType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
