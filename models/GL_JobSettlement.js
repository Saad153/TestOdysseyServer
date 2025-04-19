const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobSettlement', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    TranStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RefrNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsMultiCurrency: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalInvoiceAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalBillAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalReceiptAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalPaymentAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalInvOpeningAdvAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalBillOpeningAdvAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalDebitAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalCreditAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RoundingFactor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExRateGainLossAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    ExRateGainLossAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsReversal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReversalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobReceipt',
        key: 'Id'
      }
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    IsManualNarration: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoidOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VoidReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoidBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VoidLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobSettlement',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobSettlement",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
