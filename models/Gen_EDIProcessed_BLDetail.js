const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDIProcessed_BLDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EDIProcessId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_EDIProcessed',
        key: 'Id'
      }
    },
    ediShipper: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediConsignee: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediNotifyParty1: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediNotifyParty2: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Shipper: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Consignee: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NotifyParty1: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NotifyParty2: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediMarksAndNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ediGoodsDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MarksAndNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GoodsDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ediGrossWeight: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ediNetWeight: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ediVolume: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ediPrincipal: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ShippingUnits: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    KLMId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OceanFreight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ediOceanFreight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsManualNetWeight: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDIProcessed_BLDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDIProcessed_BLDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
