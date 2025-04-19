const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_PrincipalReceiptPayment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_PrincipalReceiptPayment_TranNumber"
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceiptPaymentId: {
      type: DataTypes.INTEGER,
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
    SettlementAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    TranStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChequeNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TranModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranModeSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_BankSubType',
        key: 'Id'
      }
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
    DrawnAt: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AdvanceAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    BankChargesAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    BankChargesAmount: {
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
        model: 'GL_PrincipalReceiptPayment',
        key: 'Id'
      }
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
    Version: {
      type: DataTypes.INTEGER,
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
    IsManualNarration: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TaxPercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    RoundingFactor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsManualTax: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_PrincipalReceiptPayment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_PrincipalReceiptPayment_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_PrincipalReceiptPayment",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
