const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Voucher_Mem', {
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
      type: DataTypes.DECIMAL(18,4),
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
      type: DataTypes.STRING(50),
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
    Name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IsSchedule: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Frequency',
        key: 'Id'
      }
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NextSchedule: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_Voucher_Mem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Voucher_Mem",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
