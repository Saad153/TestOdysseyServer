const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_InvDeliveryOrderDetailProductInfoBalance', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    WMSInvDeliveryOrderDetailProductInfoId: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    tableName: 'WMS_InvDeliveryOrderDetailProductInfoBalance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_InvD__3214EC07184FC410",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
