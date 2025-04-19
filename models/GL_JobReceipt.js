const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobReceipt', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_JobReceipt_TranNumber"
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
    ReceiptCurrencyId: {
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
    NetReceived: {
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
        model: 'GL_JobReceipt',
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
    TotalSecurity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalDetention: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalNormal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OnAccount: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crtOperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    crtSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    crtSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    crtSEHBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BL',
        key: 'Id'
      }
    },
    crtSIHBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL',
        key: 'Id'
      }
    },
    crtSEMBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BL',
        key: 'Id'
      }
    },
    crtSIMBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL',
        key: 'Id'
      }
    },
    OperationTranNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    crtAEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    crtAEHAWBId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_BL',
        key: 'Id'
      }
    },
    crtAEMAWBId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_BL',
        key: 'Id'
      }
    },
    ReceivedFromId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ReceivedFromPayToParties',
        key: 'Id'
      }
    },
    IsRefund: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSettleMultipleCCInvoices: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OnlineReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobOnlineReceipt',
        key: 'Id'
      }
    },
    crtAIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    crtLGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsManualTax: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SeqNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Suffix: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobReceipt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_JobReceipt_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_JobReceipt",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
