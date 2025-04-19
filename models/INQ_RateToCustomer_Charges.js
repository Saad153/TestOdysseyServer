const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_RateToCustomer_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RateToCustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'INQ_RateToCustomer',
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
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    BuyRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsManualSellRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MarkupType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MarkupValue: {
      type: DataTypes.DECIMAL(18,5),
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
    PayableAt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Accessorials: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MinRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INQ_RateToCustomer_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_RateToCustomer_Charges",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
