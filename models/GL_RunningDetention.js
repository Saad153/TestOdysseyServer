const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_RunningDetention', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_RunningDetention_TranNumber"
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InvoiceKindId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobInvOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReferenceNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DueDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceCurrencyId: {
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
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    SettlementInvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InvoiceRemarks: {
      type: DataTypes.TEXT,
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
    GLInvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Invoices',
        key: 'Id'
      }
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetInclTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
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
    IsManualRemarks: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReturnTerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    CNInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_RunningDetention',
        key: 'Id'
      }
    },
    TerminalCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    DemurrageStartingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContainerReturnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IssueFromTerminal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CNSetteledId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    FreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    MasterEntryAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsEditExRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ExRateEditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExRateEditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExRateEditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RateGroupForRDInv: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AutoManualId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BillingPartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    InvoiceToId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BankDetailRegID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_BankDetailRegister',
        key: 'Id'
      }
    },
    InternalComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsCarrierOwnContainer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDirectJob: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsManualTariffRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_RunningDetention',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_RunningDetention_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_RunningDetention",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
