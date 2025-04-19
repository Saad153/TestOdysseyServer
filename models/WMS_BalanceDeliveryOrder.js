const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_BalanceDeliveryOrder', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DeliveryOrderDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_DeliveryOrder_Detail',
        key: 'Id'
      }
    },
    OrderQty: {
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
    }
  }, {
    sequelize,
    tableName: 'WMS_BalanceDeliveryOrder',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Bala__3214EC070B7FD8D7",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
