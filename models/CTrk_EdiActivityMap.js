const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_EdiActivityMap', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ACTSysGenCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EDITypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDIType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ACTTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACTType: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsConsignee: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsConsignor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsONHIREACT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTrk_EdiActivityMap',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CTrk_EdiActivityMap",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
