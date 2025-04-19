const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Loan', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmployeeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    DisbursementDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GrantAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    InstallmentAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    NoOfStallment: {
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
    AccountTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LoanAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    LoanPayableAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    ChequeNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ChequeDate: {
      type: DataTypes.DATE,
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
    IsManualRemarks: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(300),
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
    ApplicationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApproveDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApproveBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    ReasonForLoan: {
      type: DataTypes.STRING(150),
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
    RecoveredAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Loan',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Loan__3214EC070C09E8BC",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
