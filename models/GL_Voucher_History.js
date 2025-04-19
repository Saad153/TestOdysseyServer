const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Voucher_History', {
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
    HistoryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_HistoryType',
        key: 'Id'
      }
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
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedLog: {
      type: DataTypes.STRING(100),
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
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'GL_Voucher_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Voucher_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
