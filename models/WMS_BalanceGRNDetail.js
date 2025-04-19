const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_BalanceGRNDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GRNDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_GRN_Detail',
        key: 'Id'
      }
    },
    ReceivedQty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    DeliveredQty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    BalanceQty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsHold: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_BalanceGRNDetail',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Bala__3214EC0756D7066E",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
