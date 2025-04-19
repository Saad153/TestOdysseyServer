const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_BalanceReceivingOrder', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReceivingOrderDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_ReceivingOrder_Detail',
        key: 'Id'
      }
    },
    OrderQty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    ShortQty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    ReceivedQty: {
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
    tableName: 'WMS_BalanceReceivingOrder',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Bala__3214EC0706BB23BA",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
