const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Inv_GINChangeLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CurrentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StoreId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ItemId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GLVoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FormName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RunProcessFrom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PreviousRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    NewRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Inv_GINChangeLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Inv_GINC__3214EC07435A1DA6",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
