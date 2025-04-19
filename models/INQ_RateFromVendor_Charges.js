const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_RateFromVendor_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RateFromVendorId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'INQ_RateFromVendor',
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
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Qty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LCAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RateUnit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Accessorials: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PayableAt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INQ_RateFromVendor_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_RateFromVendor_Charges",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
