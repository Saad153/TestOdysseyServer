const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobInvoice', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_JobInvoice_TranNumber"
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
      allowNull: true,
      references: {
        model: 'GL_JobInvoiceOpening',
        key: 'Id'
      }
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
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    CNInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
        key: 'Id'
      }
    },
    FreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReturnDate: {
      type: DataTypes.DATE,
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
    DemurrageStartingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IssueFromTerminal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContainerReturnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TerminalCode: {
      type: DataTypes.STRING(6),
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
    CompleteDetention: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OperationTranNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    BillingPartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
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
    LGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    RateGroupForEquipInv: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OpeningInvNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BLNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    InvoiceToId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsManualDueDays: {
      type: DataTypes.BOOLEAN,
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
    IsAutoRoundOff: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    CarrierId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    PortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ActualSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobSubType',
        key: 'Id'
      }
    },
    ContainerNo: {
      type: DataTypes.STRING(30),
      allowNull: true
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
    GAMATMSId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TMSLastUpdateOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExRateForPrincipalSOA: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    IsManualTariffRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    InternalComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ApprovedStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedStatusBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedStatusOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedStatusLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SlabTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SlabType',
        key: 'Id'
      }
    },
    ExRoundDifferenceLocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TPGL_IsPosted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TPGL_TranReferenceNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsCreatedByOtherSource: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OtherSourceName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OtherSourceDocNo: {
      type: DataTypes.STRING(50),
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
    SeqNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Suffix: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FolioNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobInvoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_JobInvoice_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_JobInvoice",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "UNIQUE_GL_JobInvoice_SubCompany_TranNumber",
        fields: [
          { name: "SubCompanyId" },
          { name: "TranNumber" },
        ]
      },
    ]
  });
};
