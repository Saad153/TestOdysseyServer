const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_GRN_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GRNId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_GRN',
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
    RateApplyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'WMS_RateApply',
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
    SNo: {
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
    }
  }, {
    sequelize,
    tableName: 'WMS_GRN_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_GRN___3214EC074F35E4A6",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
