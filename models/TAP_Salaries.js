const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Salaries', {
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
    ProcessDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DisbursementDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalaryMonth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalaryYear: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoOfDays: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CompanyId: {
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
    ModeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_PaymentTerm',
        key: 'Id'
      }
    },
    TotalDisbursementAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    SalaryPayableAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    GLVoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    Narration: {
      type: DataTypes.STRING(200),
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
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AprvdById: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AprvdStemp: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AprvdDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RoundingDecimal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Salaries',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Sala__3214EC0700983610",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
