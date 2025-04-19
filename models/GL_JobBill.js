const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobBill', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_JobBill_TranNumber"
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BillKindId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BillCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BillTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BillNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BillStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobBillOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobBillOpening',
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
    BillDate: {
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
    BillCurrencyId: {
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
    SettlementBillId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BillRemarks: {
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
    DNBillId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobBill',
        key: 'Id'
      }
    },
    DNSetteledId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crtDateFrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    crtDateTill: {
      type: DataTypes.DATE,
      allowNull: true
    },
    crtVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    crtVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    crtChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    SingleMultipleId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AutoManualId: {
      type: DataTypes.INTEGER,
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
    LGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    OpeningInvNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BLNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    InvoiceCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsManualDueDays: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    IsSTWHAuthorityApplied1: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    STWHAuthorityId1: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TaxAuthority',
        key: 'Id'
      }
    },
    STWHAuthorityOnAmount1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    STWHAuthorityPercentage1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsSTWHAuthorityManualValue1: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    STWHAuthorityValue1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsSTWHAuthorityApplied2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    STWHAuthorityId2: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TaxAuthority',
        key: 'Id'
      }
    },
    STWHAuthorityOnAmount2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    STWHAuthorityPercentage2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsSTWHAuthorityManualValue2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    STWHAuthorityValue2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    STWHAuthorityTotalDeduction: {
      type: DataTypes.DECIMAL(18,5),
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
    IsPrincipalReimbursement: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsNonOperational: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'GL_JobBill',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_JobBill_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_JobBill",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "UNIQUE_GL_JobBill_SubCompany_TranNumber",
        fields: [
          { name: "SubCompanyId" },
          { name: "TranNumber" },
        ]
      },
    ]
  });
};
