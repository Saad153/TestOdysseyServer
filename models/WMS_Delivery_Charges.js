const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_Delivery_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DeliveryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_Delivery',
        key: 'Id'
      }
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    RateApplyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsAutoCharges: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Qty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_Delivery_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Deli__3214EC075637E7F0",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
