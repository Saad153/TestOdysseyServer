const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDIProcessed_Charge', {
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
    ediCharges: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ediCurrency: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ediPPCC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PPCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ediContainerSizeType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    IsPrincipal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ediPrincipal: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostRevenueId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dExchangeRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PerUnitFixedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDIProcessed_Charge',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDIProcessed_Charge",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
