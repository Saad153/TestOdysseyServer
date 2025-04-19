const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ActivityType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActvTypeDesc: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "IX_DEPO_ActivityType_ActvTypeDesc"
    },
    IsInternal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsStockType: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ActvTypeShortCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_ActivityType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_ActivityType_ActvTypeDesc",
        unique: true,
        fields: [
          { name: "ActvTypeDesc" },
        ]
      },
      {
        name: "PK_DEPO_ActivityType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
