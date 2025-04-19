const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Voucher_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    COAAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    IsReconciled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReconcileDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DebitVC: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    CreditVC: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    DebitLC: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    CreditLC: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    NarrationVD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ChequeNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CurrencyIdVD: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    ExchangeRateVD: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    VoucherDateVD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GLBalanceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSettlementRow: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TaxTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_InvTaxType',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsManualLCAmount: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PostToBank: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PostToBankDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DepositDeliveryStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DepositDeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DrawnBank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsInvKoffRow: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LastPostUnPostBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastPostUnPostOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsTaxDeducted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ITaxSection: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WHTPercentage: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    WHTAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    BankSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_BankSubType',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_Voucher_Detail',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Voucher_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
