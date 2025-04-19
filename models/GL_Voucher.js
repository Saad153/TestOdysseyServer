const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Voucher', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VoucherNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VoucherDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VoucherTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_VoucherType',
        key: 'Id'
      }
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DebitAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CreditAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsMultiCurrency: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsBankTransferVoucher: {
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
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    SettlementAccountId: {
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
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VoidLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsCheckOut: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CheckOutOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CheckOutReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CheckOutBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CheckOutLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VoucherFormId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_VoucherFormType',
        key: 'Id'
      }
    },
    IsCCBreakUp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Voucher_To_From: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    OthFrmDocNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OthFormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsCreatedbyOthForm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ChequeReturnId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    IsAudited: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AuditedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AuditedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AuditedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FilerStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_TaxFilerStatus',
        key: 'Id'
      }
    },
    TaxNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_TaxInvNature',
        key: 'Id'
      }
    },
    ITaxSection: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WHTPercentage: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsTaxDeducted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SupplierAddress: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    SupplierNTNNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ChequeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_ChequeType',
        key: 'Id'
      }
    },
    ReqId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Requisition',
        key: 'Id'
      }
    },
    IsAutoEntry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DrawnAt: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    BankSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_BankSubType',
        key: 'Id'
      }
    },
    ChqDeliveryRemarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsChqPrinted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsChqHold: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ChqDeliveredTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsChqSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ChqCrossId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChqPrintDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Voucher',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_Voucher_VoucherNo",
        unique: true,
        fields: [
          { name: "VoucherNo" },
        ]
      },
      {
        name: "PK_GL_Voucher",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
